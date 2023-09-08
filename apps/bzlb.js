import plugin from '../../../lib/plugins/plugin.js';

export class CoinListPlugin extends plugin {
  constructor() {
    super({
      name: 'coin-list',
      dsc: 'coin-list',
      event: 'message',
      priority: 50,
      rule: [
        {
          reg: `^#?(b|B|币)种列表`,
          fnc: 'sendCoinList'
        },
      ]
    });
  }

  async sendCoinList(e) {
    const coinList = [
      'dnx', 'kas', 'rvn', 'btc', 'chia', 'clore', 'doge', 'ergo', 'eth', 'nexa', 'neoxa', 'rxd', 'xch', 'meme', 'pepe'
    ];

    const replyMessage = '支持的币种列表：\n' + coinList.join('\n');

    await this.reply(replyMessage);
  }
}
