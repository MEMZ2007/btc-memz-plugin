import plugin from '../../../lib/plugins/plugin.js';
import puppeteer from 'puppeteer';

export class PrecipitationScreenshot extends plugin {
  constructor() {
    super({
      name: '降水截图',
      dsc: '发送#降水，获取降水数据截图',
      event: 'message',
      priority: 100,
      rule: [
        {
          reg: '^#?降水$',
          fnc: 'capturePrecipitationScreenshot',
        },
      ],
    });
  }

  async capturePrecipitationScreenshot(e) {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      const url = 'http://www.weather.com.cn/radar/';

      // 打开指定网页
      await page.goto(url);

      // 等待一段时间，可以根据实际情况修改等待时间
      await page.waitForTimeout(3000); // 等待 3 秒钟

      // 截取网页截图
      const imgBuffer = await page.screenshot();

      // 关闭浏览器
      await browser.close();

      // 发送截图
      await this.reply(segment.image(imgBuffer));
    } catch (error) {
      console.error('获取降水截图失败:', error);
      await this.reply('获取降水截图失败，请稍后重试。');
    }
  }
}
