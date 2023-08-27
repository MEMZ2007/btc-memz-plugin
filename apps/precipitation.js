import plugin from '../../../lib/plugins/plugin.js';
import puppeteer from 'puppeteer';

export class FullPageScreenshot extends plugin {
  constructor() {
    super({
      name: '降水',
      dsc: '发送#降水，获取降水数据截图',
      event: 'message',
      priority: 100,
      rule: [
        {
          reg: '^#?降水$',
          fnc: 'captureFullPageScreenshot',
        },
      ],
    });
  }

  async captureFullPageScreenshot(e) {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      const url = 'http://www.weather.com.cn/radar/';

      // 打开指定网页
      await page.goto(url);

      // 设置页面视口为全屏
      await page.setViewport({ width: 1920, height: 1080 }); // 设置为全屏大小

      // 等待一段时间，可以根据实际情况修改等待时间
      await page.waitForTimeout(3000); // 等待 3 秒钟

      // 截取全屏截图
      const imgBuffer = await page.screenshot({ fullPage: true }); // 设置 fullPage 为 true

      // 关闭浏览器
      await browser.close();

      // 发送全屏截图
      await this.reply(segment.image(imgBuffer));
    } catch (error) {
      console.error('获取截图失败:', error);
      await this.reply('获取截图失败，请稍后重试。');
    }
  }
}
