import plugin from '../../../lib/plugins/plugin.js';
import puppeteer from 'puppeteer';

export class TyphoonScreenshot extends plugin {
  constructor() {
    super({
      name: '台风截图',
      dsc: '发送#台风，获取最新台风信息截图',
      event: 'message',
      priority: 100,
      rule: [
        {
          reg: '^#?台风$',
          fnc: 'captureTyphoonScreenshot',
        },
      ],
    });
  }

  async captureTyphoonScreenshot(e) {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      const url = 'http://typhoon.nmc.cn/web.html';
      await page.goto(url);
      await page.waitForTimeout(3000);
      const imgBuffer = await page.screenshot();
      await browser.close();
      await this.reply(segment.image(imgBuffer));
    } catch (error) {
      console.error('获取台风截图失败:', error);
      await this.reply('获取台风截图失败，请稍后重试。');
    }
  }
}
