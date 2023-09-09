import plugin from '../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';

export class saohuaWenAn extends plugin {
  constructor() {
    super({
      name: '骚话文案',
      dsc: '获取骚话文案',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^#?骚话文案$',
          fnc: 'getSaohuaWenAn',
        },
      ],
    });
  }

  async getSaohuaWenAn(e) {
    try {
      const response = await fetch('https://v.api.aa1.cn/api/api-saohua/index.php?type=json');
      const data = await response.json();
      await this.reply(data.saohua, true, { recallMsg: 30 });
    } catch (error) {
      console.error('[骚话文案] 接口请求失败:', error);
      await this.reply('骚话文案接口请求失败，请稍后重试');
    }
  }
}
