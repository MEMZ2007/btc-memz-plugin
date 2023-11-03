import plugin from '../../../lib/plugins/plugin.js';
import { segment } from 'oicq';
import puppeteer from 'puppeteer';

// 定义一个url_list对象，用于存储不同币种的网页链接
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
};

// 定义一个WebPreview类，继承自plugin类
export class WebPreview extends plugin {
  // 构造函数，传入参数
// 构造函数，用于初始化插件
  constructor() {
    super({
      // 插件名称
      name: '网页预览',
      // 插件描述
      dsc: '发送#查询币种,返回此币种价格网页截图',
      // 事件类型
      event: 'message',
      // 优先级
      priority: 100,
      // 规则
      rule: [
        {
          // 正则表达式，用于匹配查询的币种
          reg: `^#?(dnx|kas|rvn|btc|chia|clore|doge|ergo|eth|nexa|neoxa|rxd|xch|meme|pepe)$`,
          // 匹配到正则表达式时，执行的函数
          fnc: 'preview'
        },
        {
          // 正则表达式，用于匹配查询的币种列表
          reg: `^#?(b|B|币)种列表`,
          // 匹配到正则表达式时，执行的函数
          fnc: 'sendCoinList'
        },
      ]
    });
  }

  // 定义preview函数，用于获取指定币种的网页截图
  async preview(e) {
    // 获取消息中的币种名称
    let name = e.msg.replace(/#/g,'').trim();
    // 获取指定币种的网页链接
    const url = url_list[name];
    // 启动浏览器
    const browser = await puppeteer.launch();
    // 创建新页面
    const page = await browser.newPage();
    // 打开指定网页
    await page.goto(url);
    // 设置页面视图大小
    await page.setViewport({ width: 1000, height: 800 });
    // 获取网页截图
    const imgBuffer = await page.screenshot();
    // 关闭浏览器
    await browser.close();
    // 回复截图
    await this.reply(segment.image(imgBuffer));
  }

  // 定义sendCoinList函数，用于获取支持的币种列表
  async sendCoinList(e) {
    // 定义支持的币种列表
    const coinList = [
      'dnx', 'kas', 'rvn', 'btc', 'chia', 'clore', 'doge', 'ergo', 'eth', 'nexa', 'neoxa', 'rxd', 'xch', 'meme', 'pepe'
    ];

    // 拼接支持的币种列表消息
    const replyMessage = '支持的币种列表：\n' + coinList.join('\n');

    // 回复消息
    await this.reply(replyMessage);
  }
}