import { segment } from "oicq";
import plugin from '../../../../lib/plugins/plugin.js';
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
  if (e.isMaster) {
    await this.reply(`cmd帮助：\n呼出帮助：\n#cmd\n单条命令执行：\n#cmd [命令]\n多条命令执行：\n#cmd [命令1] && [命令2]  && [命令3] && ......\n\n注意：\n1.每次执行#cmd命令后都会回到/root\n2.该插件具有一定破坏性，所以仅bot的主人可用\n3.部分变量无法使用甚至报错，这是正常的`);
    } else {
    await this.reply("凡人，休得僭越！");
    return;
    }
}
async zhongduan(e) {
  if (!e.isMaster) {
     await this.reply("凡人，休得僭越！");
    return;
    }
    
  console.log("用户命令：", e.msg);

  let msg = e.msg.replace("#cmd","");
  var exec = require('child_process').exec;
  var ls = exec('cd ../ && '+msg, function (error, stdout, stderr){
    if (error) {
      e.reply("失败！\nError code: "+error.code+"\n"+error.stack);
    }else{
      e.reply(stdout)
    }
  })

  return true;
  }
}