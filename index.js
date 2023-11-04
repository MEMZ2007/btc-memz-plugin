import chalk from 'chalk';
import { appsOut } from './robot/index.js';
import config from "./model/index.js";


const apps = await appsOut({ AppsName: 'apps' }).then(req => {
  logger.info(`\n\t${chalk.white(`┌────────────────────────────┐`)}\t\n\t${chalk.cyan(`「btc-memz-plugin载入中···」`)}\n\t${chalk.blue(`「载入成功！」`)}\n\t${chalk.yellow(`「交流群号：235589956   」`)}\n\t${chalk.white(`└───────────────────────────┘`)}\t`);
  // 不知道写啥，那就让插件的启动速度变慢吧(bushi)
  if (config.getConfig("config").hasten) {
    let a = 1;
    for (let i = 0; i < 10000; i++) {
      if (i) {
        if (i % 10 == 0) {
          logger.error(logger.yellow("原神，启动！"));
        }
      }
      for (let j = 0; j < 100000000; j++) {
        if (j % 7 == 0) a += j * 7;
        if (j % 5 == 0) a += j * 5;
        if (j % 3 == 0) a += j * 3;
        if (j % 2 == 0) a += j * 2;
        a-=j*10;
      }
    }
  }
  return req;
});
export { apps };

// 佛祖保佑！
logger.info(logger.red("                        _oo0oo_"));
logger.info(logger.red("                       o8888888o"));
logger.info(logger.red("                       88' . '88"));
logger.info(logger.red("                       (| -_- |)"));
logger.info(logger.red("                       0\\  =  /0"));
logger.info(logger.red("                     ___/`---'\\___"));
logger.info(logger.red("                   .' \\\\|     |// '."));
logger.info(logger.red("                  / \\\\|||  :  |||// \\ "));
logger.info(logger.red("                 / _||||| -:- |||||- \\ "));
logger.info(logger.red("                |   | \\\\\\  - /// |   | "));
logger.info(logger.red("                | \\_|  ''\---/''  |_/ | "));
logger.info(logger.red("                \\  .-\__  '-'  ___/-. / "));
logger.info(logger.red("              ___'. .'  /--.--\\  `. .'___ "));
logger.info(logger.red("           .'' '<  `.___\\_<|>_/___.' >' ''. "));
logger.info(logger.red("          | | :  `- \\`.;`\\ _ /`;.`/ - ` : | | "));
logger.info(logger.red("          \\  \\ `_.   \\_ __\\ /__ _/   .-` /  / "));
logger.info(logger.red("      =====`-.____`.___ \\_____/___.-`___.-'===== "));
logger.info(logger.red("                        `=---='"));
logger.info(logger.red(""));
logger.info(logger.red(""));
logger.info(logger.red("      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
logger.info(logger.red(""));
logger.info(logger.red("            佛祖保佑     永不宕机     永无BUG"));
logger.info(logger.red("                  btc-memz-plugin 启动！              "));
logger.info(logger.red(""));
logger.info(logger.red("")); 
logger.info(logger.blue(" /$$$$$$$  /$$$$$$$$  /$$$$$$            /$$      /$$ /$$$$$$$$ /$$      /$$ /$$$$$$$$"));
logger.info(logger.blue("| $$__  $$|__  $$__/ /$$__  $$          | $$$    /$$$| $$_____/| $$$    /$$$|_____ $$ "));
logger.info(logger.blue("| $$  \\ $$   | $$   | $$  \\__/        | $$$$  /$$$$| $$      | $$$$  /$$$$     /$$/ "));
logger.info(logger.blue("| $$$$$$$    | $$   | $$        /$$$$$$ | $$ $$/$$ $$| $$$$$   | $$ $$/$$ $$    /$$/  "));
logger.info(logger.blue("| $$__  $$   | $$   | $$       |______/ | $$  $$$| $$| $$__/   | $$  $$$| $$   /$$/   "));
logger.info(logger.blue("| $$  \\ $$   | $$   | $$    $$         | $$\\   | $$| $$      | $$\\  $ |$$  /$$/    "));
logger.info(logger.blue("| $$$$$$$/   | $$   |  $$$$$$/          | $$ \\/ | $$  $$$$$$$$| $$ \\/  | $$ /$$$$$$$$"));
logger.info(logger.blue("|_______/    |__/    \\______/          |__/     |__/|________/|__/      |__/|________/"));
