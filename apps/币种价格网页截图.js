import plugin from '../../../lib/plugins/plugin.js';
import { segment } from 'oicq';
import puppeteer from 'puppeteer';

const list = [
  'dnx',
  'kas',
  'rvn',
  'btc',
  'chia',
  'clore',
  'doge',
  'ergo',
  'eth',
  'nexa',
  'neoxa',
  'rxd',
  'xch',
  'meme',
  'pepe',
]

const url_list = {
  'dnx': "https://www.coincarp.com/zh/currencies/dynex/",
  'kas': "https://www.coincarp.com/zh/currencies/kaspa/",
  'rvn': "https://www.coincarp.com/zh/currencies/ravencoin/",
  'btc': "https://www.coincarp.com/zh/currencies/bitcoin/",
  'chia': "https://www.coincarp.com/zh/currencies/chianetwork/",
  'clore': "https://www.coincarp.com/zh/currencies/clore-ai/price/",
  'doge': "https://www.coincarp.com/zh/currencies/dogecoin/",
  'ergo': "https://www.bibiqing.com/coin/ergoplatform",
  'eth': "https://www.coincarp.com/zh/currencies/ethereum/",
  'nexa': "https://www.coincarp.com/zh/currencies/nexa-org/",
  'neoxa': "https://www.mytokencap.com/zh/currencies/neox/821838646/",
  'rxd': "https://www.coincarp.com/zh/currencies/radiant/",
  'xch': "https://www.coincarp.com/zh/currencies/chianetwork/",
  'meme': "https://www.coincarp.com/zh/currencies/meme-bsc/",
  'pepe': "https://www.coincarp.com/zh/currencies/pepe/",
}

export class WebPreview extends plugin {
  constructor() {
    super({
      name: '网页预览',
      dsc: '发送#查询币种,返回此币种价格网页截图',
      event: 'message',
      priority: 100,
      rule: [
        {
          reg: `^#?${list}(.*)`,
          fnc: 'preview'
        },
      ]
    });
  }

  async preview(e) {
    // let name = e.msg.replace(/#/g,'').trim();
    const url = url_list[name];
    if (url == null) {
      e.reply("没有此币种哦")
      return true
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