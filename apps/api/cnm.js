import plugin from '../../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';

export class cnm extends plugin {
  constructor() {
    super({
      name: 'btc-cnm',
      dsc: 'btc-cnm',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^#?(骂我|cnm|wcnm|nmsl)',
          fnc: 'cnm',
        },
      ],
    });
  }

  async cnm(e) {
    try {
      const response = await fetch('http://api.wxsszs.cn/api/Ridicule.php?msg=5');
      const data = await response.get();
      await this.reply(data.cnm, true, { recallMsg: 30 });
    } catch (error) {
      console.error('[btc-cnm] 接口请求失败:', error);
      await this.reply('btc-cnm接口请求失败，请稍后重试');
    }
  }
}
