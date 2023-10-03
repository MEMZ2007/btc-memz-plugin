import plugin from '../../../lib/plugins/plugin.js';
import { segment } from 'oicq';
import puppeteer from 'puppeteer';

export class ScreenshotOfWebPages extends plugin {
  constructor() {
    super({
      name: '网页截图',
      dsc: '截图网页',
      event: 'message',
      priority: 100,
      rule: [
        {
          reg: `^#?网页截图(.*)$`,
          fnc: 'screenshot'
        },
      ]
    });
  }

  async screenshot(e) {
    await this.reply("正在截图中...")
    let url = e.msg.replace(/#网页截图(http:\/\/|https:\/\/)/g,'').trim();
    if (url.replace(/(http:\/\/|https:\/\/)/g, '').trim() == url) {
      url = "http://" + url
    }
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1000, height: 800 });
    const imgBuffer = await page.screenshot();
    await browser.close();
    await this.reply(segment.image(imgBuffer));
  }
}
