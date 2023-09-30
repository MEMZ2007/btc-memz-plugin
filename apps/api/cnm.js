import plugin from '../../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';

export class RidiculePlugin extends plugin {

  constructor() {
    super({
      name: 'btccnm',
      dsc: '获取cnm语录',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^#?爆笑语录$',
          fnc: 'btccnm',
        }
      ]
    });
  }

  async btccnmm(e) {
  try {
    const url = 'http://api.wxsszs.cn/api/Ridicule.php?msg=5';
    
    const params = {msg: 5}; 
    const response = await fetch(url + '?' + new URLSearchParams(params));
    
    const data = await response.json();
    
    if (response.ok) {
      await this.reply(data.content, true, {recallMsg: 30});
    } else {
      throw new Error('接口请求失败');
    }
    
  } catch (error) {
      console.error('cnm接口请求失败:', error);
      await this.reply('cnm接口请求失败,请稍后重试');
    }
  }

}