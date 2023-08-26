import puppeteer from 'puppeteer';
import { segment } from 'oicq';
import plugin from '../../../lib/plugins/plugin.js';

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
        },
        {
          reg: '^#?pepe$',
          fnc: 'pepe'
        }
      ],
    });
  }

  async takeScreenshot(url) {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1000, height: 800 });
    const imgBuffer = await page.screenshot();
    await browser.close();
    await this.reply(segment.image(imgBuffer));
  }

  async preview() {
    await this.takeScreenshot('https://www.coincarp.com/zh/currencies/dynex/');
  }
  async previewKaspa() {
    await this.takeScreenshot('https://www.coincarp.com/zh/currencies/kaspa/');
  }
  async previewRavencoin() {
    await this.takeScreenshot('https://www.coincarp.com/zh/currencies/ravencoin/');
  }
  async previewBitcoin() {
    await this.takeScreenshot('https://www.coincarp.com/zh/currencies/bitcoin/');
  }
  async previewChia() {
    await this.takeScreenshot('https://www.coincarp.com/zh/currencies/chianetwork/');
  }
  async previewclore() {
    await this.takeScreenshot('https://www.coincarp.com/zh/currencies/clore-ai/price/');
  }
  async previewdoge() {
    await this.takeScreenshot('https://www.coincarp.com/zh/currencies/dogecoin/');
  }
  async previewergo() {
    await this.takeScreenshot('https://www.bibiqing.com/coin/ergoplatform');
  }
  async previeweth() {
    await this.takeScreenshot('https://www.coincarp.com/zh/currencies/ethereum/');
  }
  async previewnexa() {
    await this.takeScreenshot('https://www.coincarp.com/zh/currencies/nexa-org/');
  }
  async previewrvn() {
    await this.takeScreenshot('https://www.coincarp.com/zh/currencies/ravencoin/');
  }
  async neoxa() {
    await this.takeScreenshot('https://www.mytokencap.com/zh/currencies/neox/821838646/');
  }
  async rxd() {
    await this.takeScreenshot('https://www.coincarp.com/zh/currencies/radiant/');
  }
  async xch() {
    await this.takeScreenshot('https://www.coincarp.com/zh/currencies/chianetwork/');
  }
  async meme() {
    await this.takeScreenshot('https://www.coincarp.com/zh/currencies/meme-bsc/');
  }
  async pepe() {
    await this.takeScreenshot('https://www.coincarp.com/zh/currencies/pepe/');
  }
  // 为其他加密货币定义类似的方法
  //MD，累死我了
  //AWA
  //这优化
  //欸嘿
}
