import plugin from '../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';

export class PingPlugin extends plugin {
  constructor() {
    super({
      name: 'Ping插件',
      dsc: 'Ping指定IP/域名并返回结果',
      event: 'message',
      priority: -1,
      rule: [
        {
          reg: /^#ping\s+(.+)/i, // 匹配以"#ping "开头的消息
          fnc: 'ping',
        },
      ],
    });
  }

  async ping(event) {
    const message = event.msg.content; // 获取消息内容
    const match = message.match(/^#ping\s+(.+)/i); // 提取IP/域名
    const target = match[1];

    try {
      // 构建请求URL
      const apiUrl = `https://api.qingvps.cn/API/ping.php?url=${encodeURIComponent(target)}`;
      
      // 发送GET请求
      const response = await fetch(apiUrl);

      if (response.ok) {
        const resultText = await response.text();
        await this.reply(`Ping结果：\n${resultText}`);
      } else {
        await this.reply(`请求失败，状态码：${response.status}`);
      }
    } catch (error) {
      console.error('Ping请求失败:', error);
      await this.reply('Ping请求失败，请稍后重试');
    }
  }
}
