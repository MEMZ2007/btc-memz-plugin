import plugin from '../../../lib/plugins/plugin.js';
import puppeteer from 'puppeteer';
import { segment } from 'oicq';

let browser;

export default class ImgPlugin extends plugin {

  constructor() {
    super({
      rule: [
        {
          reg: '^#全部截图$',
          fnc: 'run'
        }
      ]
    });
  }

  async run(e) {

    if (!browser) {
      browser = await puppeteer.launch();
    }

    const urls = [
      'https://www.coincarp.com/zh/currencies/dynex',
      'https://www.coincarp.com/zh/currencies/kaspa/',
      'https://www.coincarp.com/zh/currencies/ravencoin/',
      'https://www.coincarp.com/zh/currencies/bitcoin/',
      'https://www.coincarp.com/zh/currencies/chianetwork/',
      'https://www.coincarp.com/zh/currencies/clore-ai/price/',
      'https://www.coincarp.com/zh/currencies/dogecoin/',
      'https://www.bibiqing.com/coin/ergoplatform',
      'https://www.coincarp.com/zh/currencies/ethereum/',
      'https://www.coincarp.com/zh/currencies/nexa-org/',
      'https://www.mytokencap.com/zh/currencies/neox/821838646',
      'https://www.coincarp.com/zh/currencies/radiant/',
      'https://www.coincarp.com/zh/currencies/chianetwork',
      'https://www.coincarp.com/zh/currencies/meme-bsc/',
      'https://www.coincarp.com/zh/currencies/pepe/'
    ];

    const imgContents = []; 
    
    for (let url of urls) {
      const page = await browser.newPage();
      await page.goto(url);
      await page.setViewport({ width: 300, height: 200});
      const imgBuffer = await page.screenshot();
      imgContents.push({
        type: 'image',
        data: {
          file: imgBuffer
        }
      });
      await page.close(); 
    }
    
    const forwardMsg = segment.forward(imgContents);

    await e.reply([{
      type: 'text',
      data: {
        text: '全部截图结果:'  
      }
    }, {
      type: 'forward',
      data: forwardMsg 
    }]);

    if(browser) {
      await browser.close();
    }

  }

}