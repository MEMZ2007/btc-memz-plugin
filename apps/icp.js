import plugin from '../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';

export class ICPCheck extends plugin {

  constructor() {
    super({
      name: 'ICPCheck',
      dsc: 'ICP备案查询',
      event: 'message',
      priority: 10,

      rule: [
        {
          reg: '^#?icp查询\s*(.+)',
          fnc: 'checkICP'
        }
      ]
    });
  }

    async checkICP(e) {
    const domain = e.match(/#?icp查询\s*(.+)/)[1]; // 提取用户消息中的域名
    const apiUrl = `https://api.uomg.com/api/icp?domain=${encodeURIComponent(domain)}`;

try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      if (data && data.code === '1') {
        const icp = data.icp;
        const replyMsg = `${domain}的ICP备案号是：${icp}`;
        await this.reply(replyMsg);
      } else {
        await this.reply(`未找到与${domain}相关的ICP备案信息。`);
      }
    } else {
      await this.reply('查询ICP备案信息时出现错误。');
    }
  } catch (error) {
    console.error(error);
    await this.reply('查询ICP备案信息时出现错误。');
  }
}
}