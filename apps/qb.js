import puppeteer from 'puppeteer';
import plugin from '../../../lib/plugins/plugin.js';

export class CoinInfoPlugin extends plugin {
  constructor() {
    super({
      name: 'coininfo',
      dsc: 'coininfo',
      event: 'message',
      priority: 50,
      rule: [
        {
          reg: /^#全部币种查询$/,
          fnc: 'sendCoinInfo',
        },
      ],
    });
  }

  async sendCoinInfo() {
    const coinUrls = {
      'dnx': 'https://www.coincarp.com/zh/currencies/dynex/',
      'kas': 'https://www.coincarp.com/zh/currencies/kaspa/',
      'rvn': 'https://www.coincarp.com/zh/currencies/ravencoin/',
      'btc': 'https://www.coincarp.com/zh/currencies/bitcoin/',
      'chia': 'https://www.coincarp.com/zh/currencies/chianetwork/',
      'clore': 'https://www.coincarp.com/zh/currencies/clore-ai/price/',
      'doge': 'https://www.coincarp.com/zh/currencies/dogecoin/',
      'ergo': 'https://www.bibiqing.com/coin/ergoplatform',
      'eth': 'https://www.coincarp.com/zh/currencies/ethereum/',
      'nexa': 'https://www.coincarp.com/zh/currencies/nexa-org/',
      'neoxa': 'https://www.mytokencap.com/zh/currencies/neox/821838646/',
      'rxd': 'https://www.coincarp.com/zh/currencies/radiant/',
      'xch': 'https://www.coincarp.com/zh/currencies/chianetwork/',
      'meme': 'https://www.coincarp.com/zh/currencies/meme-bsc/',
      'pepe': 'https://www.coincarp.com/zh/currencies/pepe/',
    };

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const coinInfoPromises = Object.keys(coinUrls).map(async (coin) => {
      const url = coinUrls[coin];
      await page.goto(url);
      const screenshotBuffer = await page.screenshot({ encoding: 'base64' }); // 使用 encoding: 'base64'
      return {
        coin,
        screenshot: screenshotBuffer,
      };
    });

    const coinInfoScreenshots = await Promise.all(coinInfoPromises);

    await browser.close();

    // 将所有币种的截图折叠成消息记录
    const message = coinInfoScreenshots.map((info) => {
      return `[CQ:image,file=base64://${info.screenshot}] ${info.coin} - ${coinUrls[info.coin]}`;
    }).join('\n');

    await this.reply(message);
  }
}
