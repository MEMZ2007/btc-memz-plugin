import plugin from '../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';

export class BtcPlugin extends plugin {

  constructor() {
    super({
      name: 'btc查询',  
      desc: '查询btc等币种行情',
      event: 'message',   
      priority: 50,
      rule: [
        {
          reg: /^#btc查询$/,
          fnc: 'btc'
        }
      ]
    });
  }

  async btc() {
    const url = 'https://api.coincap.io/v2/assets?limit=20';
    
    try {
      const res = await fetch(url);
      const data = await res.json();
      
      let msg = 'Top 20 币种行情:\n';

      data.data.forEach(item => {
        msg += `${item.name}: \n$${item.priceUsd} \n 24h变动: ${item.changePercent24Hr}%\n`;  
      });

      await this.reply(msg);
      
    } catch (err) {
      console.error(err);
      await this.reply('查询失败,请稍后再试');
    }
  }

}