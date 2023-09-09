import plugin from '../../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';

export class wenan extends plugin {
  constructor() {
    super({
      name: 'oschina-news',
      dsc: 'oschina-news',
      event: 'message',
      priority: 50,
      rule: [
        {
          reg: `^#?(oschina-news|oschinanews|开源中国新闻|开源中国)`, 
          fnc: 'fetchOschinaNews' 
        },
      ]
    });
  }

  async fetchOschinaNews(e) {
    const url = 'https://query.asilu.com/news/oschina-news?callback=jsonp_5'; 
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.text();
      
      const jsonData = JSON.parse(data.replace(/^.*?{/, '{').replace(/\);?$/, ''));
      
      const newsList = jsonData.list;
      
      let replyMessage = '最新的开源中国新闻：\n';
      for (const news of newsList) {
        replyMessage += `${news.title}\n${news.url}\n\n`;
      }
      await this.reply(replyMessage);
    } catch (error) {
      console.error('Error:', error);
      await this.reply('获取开源中国新闻数据时出错');
    }
  }
}
