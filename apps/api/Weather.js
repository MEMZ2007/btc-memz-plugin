import plugin from '../../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';

export class WeatherQuery extends plugin {
  constructor() {
    super({
      name: 'weather-query',
      dsc: '天气查询插件',
      event: 'message',
      priority: 50,
      rule: [
        {
          reg: '^#?(weather|天气|天气查询)(.*)',
          fnc: 'queryWeather'
        }
      ]
    });
  }

  async queryWeather(e) {
    let msg = e.msg;
    let city = msg.replace(/#|(weather|天气)/g, '').trim();
    let url = `https://query.asilu.com/weather/baidu?city=${encodeURIComponent(city)}&callback=jsonp_${Math.floor(Math.random() * 1000)}`;

    try {
      let res = await fetch(url);

      if (!res.ok) {
        logger.error('接口请求失败');
        return await this.reply('接口请求失败');
      }

      let data = await res.text();
      let jsonData = data.match(/jsonp_\d+\((.*)\)/);
      
      let result = '';
      if (jsonData) {
        let weatherData = JSON.parse(jsonData[1]);
        result += `城市：${weatherData.city} 更新时间：${weatherData.update_time} 日期：${weatherData.date}\n\n`;
        result += '天气信息：\n\n';

        for (let weather of weatherData.weather) {
          result += `日期：${weather.date} 天气：${weather.weather} 温度：${weather.temp} 风力：${weather.wind}\n`;
        }
      } else {
        result = '未查询到该城市的天气信息';
      }

      await this.reply(result);
    } catch (err) {
      logger.error(err);
      await this.reply('查询失败');
    }
  }
}