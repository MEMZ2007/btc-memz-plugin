import plugin from '../../../lib/plugins/plugin.js';
import { segment } from 'oicq';
import puppeteer from 'puppeteer';

export class WebPreview extends plugin {

  constructor() {
    super({
      name: '网页预览',
      dsc: '发送#币种,返回此币种价格网页截图',

      event: 'message',
      priority: 100,

      rule: [
        {
          reg: '^#?dnx$',
          fnc: 'preview'
        },
        {
          reg: '^#?kas$',
          fnc: 'previewKaspa'
        },
        {
          reg: '^#?rvn$',
          fnc: 'previewRavencoin'
        },
        {
          reg: '^#?btc$',
          fnc: 'previewBitcoin'
        }
      ]
    });
  }

  async preview() {
    const url = 'https://www.coincarp.com/zh/currencies/dynex/';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1000, height: 800 });

    const imgBuffer = await page.screenshot();

    await browser.close();

    await this.reply(segment.image(imgBuffer));
  }

  async previewKaspa() {
    const url = 'https://www.coincarp.com/zh/currencies/kaspa/';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1000, height: 800 });

    const imgBuffer = await page.screenshot();

    await browser.close();

    await this.reply(segment.image(imgBuffer));
  }

  async previewRavencoin() {
    const url = 'https://www.coincarp.com/zh/currencies/ravencoin/';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1000, height: 800 });

    const imgBuffer = await page.screenshot();

    await browser.close();

    await this.reply(segment.image(imgBuffer));
  }

  async previewBitcoin() {
    const url = 'https://www.coincarp.com/zh/currencies/bitcoin/';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1000, height: 800 });

    const imgBuffer = await page.screenshot();

    await browser.close();

    await this.reply(segment.image(imgBuffer));
  }

}