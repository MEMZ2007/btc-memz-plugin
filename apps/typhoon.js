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

      // 打开指定网页
      await page.goto(url);

      // 等待 3 秒钟
      await page.waitForTimeout(3000);

      // 截取网页截图
      const imgBuffer = await page.screenshot();

      // 关闭浏览器
      await browser.close();

      // 发送截图
      await this.reply(segment.image(imgBuffer));
    } catch (error) {
      console.error('获取台风截图失败:', error);
      await this.reply('获取台风截图失败，请稍后重试。');
    }
  }
}
