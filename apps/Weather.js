import plugin from '../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';

export class TianXing extends plugin {
  constructor() {
    super({
      name: 'BTC-Weather',
      dsc: 'BTC-Weather',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '#?天气\s*(.+)',
          fnc: 'getWeather',
        },
        // Add other rules for other functions if needed
      ],
    });
  }

  async getWeather(e) {
    const city = e.msg.match(/#天气\s*(.+)/)[1];
    const apiUrl = `https://query.asilu.com/weather/baidu?city=${encodeURIComponent(city)}&callback=jsonp_3`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('请求失败');
      }
      const data = await response.json();

      if (data.city && data.weather) {
        let weatherInfo = `城市: ${data.city}\n更新时间: ${data.update_time}\n日期: ${data.date}\n`;

        data.weather.forEach((day) => {
          weatherInfo += `日期: ${day.date}\n天气: ${day.weather}\n温度: ${day.temp}\n风力: ${day.w}\n风向: ${day.wind}\n--------------\n`;
        });

        await this.reply(weatherInfo, true);
      } else {
        await this.reply('无法获取天气信息', true);
      }
    } catch (error) {
      console.error('天气查询失败:', error.message);
      await this.reply('天气查询接口请求失败，请联系主人更换接口', true);
    }
  }

  // Add other functions for other features if needed
}
