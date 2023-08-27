import plugin from '../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';

export class DomainInfo extends plugin {
  constructor() {
    super({
      name: '域名信息查询',
      dsc: '查询域名的注册信息和DNS服务器',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^#?域名\s*(.+)',
          fnc: 'getDomainInfo',
        },
      ],
    });
  }

  async getDomainInfo(e) {
    let domain = e.msg.match(/#?域名\s*(.+)/)[1];
    let url = `https://api.asilu.com/php/domain.php?domain=${encodeURIComponent(domain)}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      let info = '';
      if (data.domain) {
        info = `域名: ${data.domain}\n注册时间: ${data.creation_time}\n过期时间: ${data.expiration_time}\n域名商: ${data.registrar}\nDNS服务器:\n ${data.dns_servers.join('\n')}`;
      } else {
        info = '查询失败，无法获取域名信息';
      }
      await this.reply(info);
    } catch (error) {
      console.error('[域名信息查询] 接口请求失败:', error);
      await this.reply('域名信息查询接口请求失败，请联系主人更换接口');
    }
  }
}
