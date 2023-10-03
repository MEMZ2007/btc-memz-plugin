import plugin from '../../../lib/plugins/plugin.js';

export class abstain_diary extends plugin {
  constructor() {
    super({
      name: 'abstain_diary',
      dsc: 'abstain_diary',
      event: 'message',
      priority: 50,
      rule: [
        {
          reg: `^#?诶哟你干嘛，`,
          fnc: 'sendCoinList'
        },
      ]
    });
  }
}