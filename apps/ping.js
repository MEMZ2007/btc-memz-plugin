import plugin from '../../../lib/plugins/plugin.js'
import fetch from 'node-fetch'

export class wenan extends plugin {
  constructor () {
    super({
      name: 'btc-ping',
      dsc: 'btc-ping',
      event: 'message',
      priority: 50,
      rule: [
        {
          reg: `^#?(Ping|ping)(.*)`,
          fnc: 'cjping'
        },
      ]
    })
  }
  async cjping (e) {
    let msg = e.msg
		let place = msg.replace(/#|(Ping|ping)/g, "").trim();
    let url = `https://api.qingvps.cn/API/ping.php?url=${place}`;
    let res = await fetch(url).catch((err) => logger.error(err))
    if (!res) {
    logger.error('接口请求失败')
    return await this.reply('接口请求失败')
  }
    res = await res.text()
    await this.reply(`${res}`)
    }  
}
