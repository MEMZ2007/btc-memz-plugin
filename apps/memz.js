import plugin from '../../../lib/plugins/plugin.js';
import { segment } from 'oicq';
import fetch from 'node-fetch';

export class WebPrmeview extends plugin {

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
        },
        {
          reg: '^#?(关于群友|屌图|vits之屌图)$',
          fnc: 'vits'
        }
      ]
    });
  }

 async preview() {
    // 定义一个url
    const url = 'http://memz.space:8001/';
    // 使用fetch函数获取url的响应
    const response = await fetch(url);
    // 将响应的buffer赋值给buffer
    const buffer = await response.buffer();
    // 使用reply函数发送图片
    await this.reply(segment.image(buffer));
  }

  async previewBlizzard() {
    // 定义一个url
    const url = 'https://oe42057158.zicp.fun/';
    // 使用fetch函数获取url的响应
    const response = await fetch(url);
    // 将响应的buffer赋值给buffer
    const buffer = await response.buffer();
    // 使用reply函数发送图片
    await this.reply(segment.image(buffer));
  }
  async baizi() {
    // 定义一个url
    const url = 'http://43.143.247.43:20101/';
    // 使用fetch函数获取url的响应
    const response = await fetch(url);
    // 将响应的buffer赋值给buffer
    const buffer = await response.buffer();
    // 使用reply函数发送图片
    await this.reply(segment.image(buffer));
  }
  async vits() {
    // 定义一个url
    const url = 'http://43.143.247.43:20102/';
    // 使用fetch函数获取url的响应
    const response = await fetch(url);
    // 将响应的buffer赋值给buffer
    const buffer = await response.buffer();
    // 使用reply函数发送图片
    await this.reply(segment.image(buffer));
  }

}