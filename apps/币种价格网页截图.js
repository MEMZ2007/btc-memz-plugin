import plugin from '../../../lib/plugins/plugin.js';
import { segment } from 'oicq';
import puppeteer from 'puppeteer';

export class WebPreview extends plugin {
  browser = null;

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
        },
        {
          reg: '^#?chia$',
          fnc: 'previewChia'
        },
        {
          reg: '^#?clore$',
          fnc: 'previewClore'
        }
      ]
    });
  }

  async initBrowser() {
    if (!this.browser) {
      this.browser = await puppeteer.launch();
    }
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }

  async preview(url) {
    await this.initBrowser();
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1000, height: 600 });
    const imgBuffer = await page.screenshot();
    await page.close();
    await this.reply(segment.image(imgBuffer));
  }

  async previewBitcoin() {
    const url = 'https://www.coincarp.com/zh/currencies/bitcoin/';
    await this.preview(url);
  }

  async previewChia() {
    const url = 'https://www.coincarp.com/zh/currencies/chianetwork/';
    await this.preview(url);
  }

  async previewClore() {
    const url = 'https://www.coincarp.com/zh/currencies/clore-ai/price/';
    await this.preview(url);
  }

  async previewKaspa() {
    const url = 'https://www.coincarp.com/zh/currencies/kaspa/';
    await this.preview(url);
  }

  async previewRavencoin() {
    const url = 'https://www.coincarp.com/zh/currencies/ravencoin/';
    await this.preview(url);
  }

  async preview() {
    const url = 'https://www.coincarp.com/zh/currencies/dynex/';
    await this.preview(url);
  }

  async onDisable() {
    await this.closeBrowser();
  }
}