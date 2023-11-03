import plugin from '../../../lib/plugins/plugin.js';
import puppeteer from 'puppeteer';

export class Web extends plugin {
  constructor() {
    super({
      name: 'btc-web',  
      dsc: 'btc-web',
      event: 'message',
      priority: 100,
      rule: [
        {
            reg: `^#?网页截图(.*)$`,
            fnc: 'screenshot'
          },
        {
            reg: '^#?台风$',
            fnc: 'captureTyphoonScreenshot',
          },
        {
            reg: '^#?降水$',
            fnc: 'captureFullPageScreenshot',
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

  async captureFullPageScreenshot(e) {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      const url = 'https://www.weatherol.cn/pop.html?cityid=101010100';

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
 async screenshot(e) {
    // 回复正在截图中...
    await this.reply("正在截图中...")
    // 获取消息中的url
    let url = e.msg.replace(/#网页截图(http:\/\/|https:\/\/)/g,'').trim();
    // 如果url中不包含http或https，则在url前添加http
    if (url.replace(/(http:\/\/|https:\/\/)/g, '').trim() == url) {
      url = "http://" + url
    }
    // 启动浏览器
    const browser = await puppeteer.launch();
    // 打开新页面
    const page = await browser.newPage();
    // 打开url
    await page.goto(url);
    // 设置页面视口
    await page.setViewport({ width: 1920, height: 1080 });
    // 截图
    const imgBuffer = await page.screenshot();
    // 关闭浏览器
    await browser.close();
    // 回复截图
    await this.reply(segment.image(imgBuffer));
  }
}
