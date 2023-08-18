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
        },
        {
          reg: '^#?chia$',
          fnc: 'previewChia'
        },
        {
          reg: '^#?clore$',
          fnc: 'previewclore'
        },
        {
          reg: '^#?doge$',
          fnc: 'previewdoge'
        },
        {
          reg: '^#?ergo$',
          fnc: 'previewergo'
        },
        {
          reg: '^#?eth$',
          fnc: 'previeweth'
        },
        {
          reg: '^#?nexa$',
          fnc: 'previewnexa'
        },
        {
          reg: '^#?rvn$',
          fnc: 'previewrvn'
        },
        {
          reg: '^#?neoxa$',
          fnc: 'neoxa'
        },
        {
          reg: '^#?rxd$',
          fnc: 'rxd'
        },
        {
          reg: '^#?xch$',
          fnc: 'xch'
        },
        {
          reg: '^#?meme$',
          fnc: 'meme'
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

  async previewChia() {
    const url = 'https://www.coincarp.com/zh/currencies/chianetwork/';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1000, height: 800 });

    const imgBuffer = await page.screenshot();

    await browser.close();

    await this.reply(segment.image(imgBuffer));
  }

  async previewclore() {
    const url = 'https://www.coincarp.com/zh/currencies/clore-ai/price/';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1000, height: 800 });

    const imgBuffer = await page.screenshot();

    await browser.close();

    await this.reply(segment.image(imgBuffer));
  }

  async previewdoge() {
    const url = 'https://www.coincarp.com/zh/currencies/dogecoin/';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1000, height: 800 });

    const imgBuffer = await page.screenshot();

    await browser.close();

    await this.reply(segment.image(imgBuffer));
  }

  async previewergo() {
    const url = 'https://www.bibiqing.com/coin/ergoplatform';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1000, height: 800 });

    const imgBuffer = await page.screenshot();

    await browser.close();

    await this.reply(segment.image(imgBuffer));
  }

  async previeweth() {
    const url = 'https://www.coincarp.com/zh/currencies/ethereum/';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1000, height: 800 });

    const imgBuffer = await page.screenshot();

    await browser.close();

    await this.reply(segment.image(imgBuffer));
  }

  async previewnexa() {
    const url = 'https://www.coincarp.com/zh/currencies/nexa-org/';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1000, height: 800 });

    const imgBuffer = await page.screenshot();

    await browser.close();

    await this.reply(segment.image(imgBuffer));
  }

  async previewrvn() {
    const url = 'https://www.coincarp.com/zh/currencies/ravencoin/';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1000, height: 800 });

    const imgBuffer = await page.screenshot();

    await browser.close();

    await this.reply(segment.image(imgBuffer));
  }

  async neoxa() {
    const url = 'https://www.mytokencap.com/zh/currencies/neox/821838646/';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1000, height: 800 });

    const imgBuffer = await page.screenshot();

    await browser.close();

    await this.reply(segment.image(imgBuffer));
  }

  async rxd() {
    const url = 'https://www.coincarp.com/zh/currencies/radiant/';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1000, height: 800 });

    const imgBuffer = await page.screenshot();

    await browser.close();

    await this.reply(segment.image(imgBuffer));
  }

  async xch() {
    const url = 'https://www.coincarp.com/zh/currencies/chianetwork/';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1000, height: 800 });

    const imgBuffer = await page.screenshot();

    await browser.close();

    await this.reply(segment.image(imgBuffer));
  }

  async meme() {
    const url = 'https://www.coincarp.com/zh/currencies/meme-bsc/';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1000, height: 800 });

    const imgBuffer = await page.screenshot();

    await browser.close();

    await this.reply(segment.image(imgBuffer));
  }
}