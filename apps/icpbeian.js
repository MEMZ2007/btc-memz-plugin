import fetch from 'node-fetch';
import plugin from '../../../lib/plugins/plugin.js';

export class ICPQueryPlugin extends plugin {
  constructor() {
    super({
      name: 'icpquery',
      dsc: 'icpquery',
      event: 'message',
      priority: 50,
      rule: [
        {
          reg: /^#icp查询 (.+)$/,
          fnc: 'queryICP',
        },
      ],
    });
  }

  async queryICP(e) {
    const domain = e.match[1].trim(); // 获取用户输入的域名

    // 调用ICP查询API
    const apiUrl = `https://api.uomg.com/api/icp?domain=${encodeURIComponent(domain)}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      await this.reply('ICP查询失败，请稍后重试。');
      return;
    }

    const data = await response.json();

    if (data.code === '1') {
      const icpInfo = `域名：${data.domain}\nICP备案号：${data.icp}`;
      await this.reply(icpInfo);
    } else {
      await this.reply('ICP查询失败，请检查输入的域名是否正确。');
    }
  }
}
