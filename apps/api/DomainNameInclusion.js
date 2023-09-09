import plugin from '../../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';

export class DomainInfo extends plugin {
  constructor() {
    super({
      name: 'DomainInfo',
      dsc: '域名SEO收录与反链信息查询',
      event: 'message',
      priority: 10,
      rule: [
        {
          reg: '^#?(查询域名|域名查询)\s*(.+)',
          fnc: 'checkDomainInfo'
        }
      ]
    });
  }

  async checkDomainInfo(e) {
    const messageContent = e.msg; // 获取消息内容
    const domainMatch = messageContent.match(/^(#?(查询域名|域名查询))\s*(.+)/);
  
    if (!domainMatch) {
      await this.reply('请提供要查询的域名。');
      return;
    }
  
    const domain = domainMatch[3]; // 获取域名
  
    if (!domain) {
      await this.reply('请提供要查询的域名。');
      return;
    }
  
    const apiUrl = `https://api.oioweb.cn/api/site/employ?domain=${domain}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data.code === 200) {
        const updateDate = data.result.update;
        const recordInfo = data.result.record;
        const antiInfo = data.result.anti;
  
        let replyMsg = `域名：${domain}\n数据更新时间：${updateDate}\n“-”代表未收录\n\nSEO收录信息：\n`;
        for (const searchEngine in recordInfo) {
          replyMsg += `${searchEngine}: ${recordInfo[searchEngine]}\n`;
        }
  
        replyMsg += '\n反链信息：\n';
        for (const searchEngine in antiInfo) {
          replyMsg += `${searchEngine}: ${antiInfo[searchEngine]}\n`;
        }
  
        await this.reply(replyMsg);
      } else {
        await this.reply('未找到相关域名信息。');
      }
    } catch (error) {
      logger.error(error);
      await this.reply('查询域名信息时出现错误。');
    }
  }
}