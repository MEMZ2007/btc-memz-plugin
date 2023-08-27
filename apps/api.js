import plugin from '../../../lib/plugins/plugin.js';
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
        },
        {
          reg: '^#?白上吹雪$',
          fnc: 'previewBlizzard'
        },
        {
          reg: '^#?白子$',
          fnc: 'baizi'
        }
      ]
    });
  }

  async preview() {
    const url = 'http://43.143.247.43:11459';
    const response = await fetch(url);
    const buffer = await response.buffer();
    await this.reply(segment.image(buffer));
  }

  async previewBlizzard() {
    const url = 'https://oe42057158.zicp.fun/';
    const response = await fetch(url);
    const buffer = await response.buffer();
    await this.reply(segment.image(buffer));
  }
  async baizi() {
    const url = 'http://43.143.247.43:20101/';
    const response = await fetch(url);
    const buffer = await response.buffer();
    await this.reply(segment.image(buffer));
  }

}