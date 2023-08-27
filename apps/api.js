import plugin from '../../lib/plugins/plugin.js';
import { segment } from 'oicq';
import fetch from 'node-fetch';

export class WebPreview extends plugin {

  constructor() {
    super({
      name: 'api叼图发送',
      dsc: '发送#随机图片,返回api发送图片',
      event: 'message',
      priority: 100,
      rule: [
        {
          reg: '^#?随机图片$', 
          fnc: 'preview' 
        }
      ]
    });
  }

  async preview() {
    const url = 'http://192.168.1.11:8000/image';
    const response = await fetch(url);
    const buffer = await response.buffer();
    await this.reply(segment.image(buffer));
  }

}