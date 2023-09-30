import plugin from '../../../../lib/plugins/plugin.js'; 
import fetch from 'node-fetch';

export class KoutuFenfang extends plugin {

  constructor() {
    super({
      name: '口吐芬芳',
      dsc: '获取随机口吐芬芳',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^#?(爆笑|枫叶)语录$',
          fnc: 'btccnm',
        }
      ]
    });
  }

  async btccnm(e) {
    try {
      
      const url = 'https://api.wxsszs.cn/api/Ridicule.php?msg=5';
      
      const response = await fetch(url);
      const data = await response.text();

      await this.reply(data);

    } catch(err) {
      console.error(err);
      await this.reply('出错了,请重试!');
    }

  }

}