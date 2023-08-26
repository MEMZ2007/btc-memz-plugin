import { segment } from "oicq";
import plugin from '../../../lib/plugins/plugin.js';
import fetch from "node-fetch";
import {createRequire} from "module";
const require = createRequire(import.meta.url);

const _path = process.cwd();

export class kelitaocan extends plugin {
  constructor() {
    super({
      name: "终端",
      dsc: "终端",
      event: "message",
      priority: 600,
      rule: [
        {
          reg: '^#cmd.+$',
          fnc: 'zhongduan'
        },
        {
          reg: '^#cmd',
          fnc: 'help'
        }
          ],
    })
  }

async help(e) {
  if (this.e.isMaster) {
    await this.reply(segment.image("../resources/common/cmd_help.png"));
    } else {
    await this.reply("凡人，休得僭越！");
    return;
    }
}
async zhongduan(e) {
  if (!(this.e.isMaster)) {
     await this.reply("凡人，休得僭越！");
    return;
    }
    
  console.log("用户命令：", e.msg);
  //执行的逻辑功能
  let msg = e.msg.replace("#cmd","");
  var exec = require('child_process').exec;
  var ls = exec('cd ../ && '+msg, function (error, stdout, stderr){
    if (error) {
      e.reply("失败！\nError code: "+error.code+"\n"+error.stack);
    }else{
      e.reply(stdout)
    }
  })

  return true; //返回true 阻挡消息不再往下
  }
}
