import plugin from '../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';

export class HarassCheck extends plugin {

  constructor() {
    super({
      name: 'HarassCheck',
      dsc: '骚扰电话查询',
      event: 'message',  
      priority: 10,

      rule: [
        {
          reg: '^#?(骚扰|骚扰电话|疑似骚扰电话)(查询|查找|搜索|搜寻)(.*)',
          fnc: 'checkHarass'
        }
      ]

    });
  }

  async checkHarass(e) {
    let phone = e.msg.replace(/#|(骚扰|骚扰电话|疑似骚扰电话)(查询|查找|搜索|搜寻)/g, "");

    let url = `https://api.oioweb.cn/api/search/harassPhone?phone=${phone}`;
    
    let res = await fetch(url).catch(err => logger.error(err));
    res = await res.json();

    let replyMsg;
    if (res.result.status) {
      replyMsg = `查询结果:\n${phone}已被举报${res.result.num}次,疑似骚扰电话`; 
    } else {
      replyMsg = `${phone}未出现在骚扰电话数据库中`;
    }

    await this.reply(replyMsg);
  }

}