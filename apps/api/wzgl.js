import fetch from 'node-fetch';
import plugin from '../../../../lib/plugins/plugin.js';

export class HeroStrategy extends plugin {
  constructor() {
    super({
      name: 'HeroStrategy',
      dsc: '王者荣耀英雄攻略',
      event: 'message',
      priority: 10,
      rule: [
        {
          reg: /^#?(王者攻略|英雄攻略)\s*(.+)/,
          fnc: 'getHeroStrategy',
        },
      ],
    });
  }

  async getHeroStrategy(e) {
    const message = e.msg;
    logger.info(`Received message: ${message}`); // 添加日志输出

    const match = /^#?(王者攻略|英雄攻略)\s*(.+)/.exec(message);
    logger.info(`Match: ${match}`); // 添加日志输出

    if (!match) {
      await this.reply('无法识别的命令格式，请使用 #王者攻略+英雄名。');
      return;
    }

    const heroName = match[2].trim();
    logger.info(`Received heroName: ${heroName}`);

    const apiUrl = `https://zj.v.api.aa1.cn/api/wz/?msg=${encodeURIComponent(heroName)}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.text();
      await this.reply(data);
    } catch (error) {
      logger.error(error);
      await this.reply('获取英雄攻略信息时出现错误。');
    }
  }
}
