import plugin from '../../../lib/plugins/plugin.js';
import fs from 'fs';

export class ComplimentPlugin extends plugin {
  constructor() {
    super({
      name: 'compliment',
      dsc: 'compliment',
      event: 'message',
      priority: 50,
      rule: [
        {
          reg: /^#夸@(.+?)(\d*?)次?$/,
          fnc: 'sendCompliments'
        },
      ]
    });
  }

  async sendCompliments(e) {
    const msg = e.msg;
    const matches = msg.match(/^#夸@(.+?)(\d*?)次?$/);

    if (matches) {
      const targetUser = matches[1];
      const complimentCount = parseInt(matches[2]) || 5;
      const compliments = await this.loadComplimentsFromFile('plugins/btc-memz-plugin/apps/api/kua.txt');

      if (!compliments || compliments.length === 0) {
        await this.reply(`[ICQQ:at,qq=${e.user}] 无法获取夸赞内容。`);
        return;
      }

      for (let i = 0; i < complimentCount; i++) {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        const complimentMessage = compliments[randomIndex];
        await this.reply(`[ICQQ:at,qq=${targetUser}] ${complimentMessage}`);

        if (i < complimentCount - 1) {
          await this.sleep(1000);
        }
      }
    }
  }

  async loadComplimentsFromFile(filePath) {
    try {
      const fileContent = await fs.promises.readFile(filePath, 'utf-8');
      const compliments = fileContent.split('\n').map((line) => line.trim()).filter((line) => line.length > 0);
      return compliments;
    } catch (err) {
      console.error('无法加载夸赞内容：', err);
      return [];
    }
  }

  async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
