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
          fnc: 'cmd_help'
        }
          ],
    })
  }

async cmd_help(e) {
  await this.reply(`cmd帮助：\n呼出帮助：\n#cmd\n单条命令执行：\n#cmd [命令]\n多条命令执行：\n#cmd [命令1] && [命令2]  && [命令3] && ......\n\n注意：\n1.每次执行#cmd命令后都会回到/root\n2.该插件具有一定破坏性，所以仅bot的主人可用\n3.部分变量无法使用甚至报错，这是正常的`);
  return true;
}

//异步函数zhongduan，用于处理消息
async zhongduan(e) {
  //判断用户是否是主人
  if (!e.isMaster) {
     //如果不是，则回复提示信息
    await this.reply("凡人，休得僭越！");
    return;
  }
 
  //打印用户发送的消息
  console.log("用户命令：", e.msg);
  //去除消息中的#cmd
  let msg = e.msg.replace("#cmd","");
  //引入child_process模块
  var exec = require('child_process').exec;
  //执行命令，并将结果发送给用户
  var ls = exec('cd ../ && '+msg, function (error, stdout, stderr){
    if (error) {
      //如果出现错误，则将错误信息发送给用户
      e.reply("失败！\nError code: "+error.code+"\n"+error.stack);
    }else{
      //如果没有错误，则将结果发送给用户
      e.reply(stdout)
    }
  })

  return true;
  }
}