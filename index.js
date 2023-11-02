import chalk from 'chalk'
import { appsOut } from './robot/index.js';
const apps = await appsOut({ AppsName: 'apps' }).then(req => {
  logger.info(`\n\t${chalk.white(`┌────────────────────────────┐`)}\t\n\t${chalk.cyan(`「btc-memz-plugin载入中···」`)}\n\t${chalk.blue(`「载入成功！」`)}\n\t${chalk.yellow(`「交流群号：235589956   」`)}\n\t${chalk.white(`└───────────────────────────┘`)}\t`);
  return req;
});
export { apps };

/* 
for (let i = 0; i < 10000; i++) {
  if (i) {
    logger.info("原神，启动！")
  }
}
*/

logger.info("                        _oo0oo_")
logger.info("                       o8888888o")
logger.info("                       88' . '88")
logger.info("                       (| -_- |)")
logger.info("                       0\  =  /0")
logger.info("                     ___/`---'\___")
logger.info("                   .' \\|     |// '.")
logger.info("                  / \\|||  :  |||// \ ")
logger.info("                 / _||||| -:- |||||- \ ")
logger.info("                |   | \\\  - /// |   | ")
logger.info("                | \_|  ''\---/''  |_/ | ")
logger.info("                \  .-\__  '-'  ___/-. / ")
logger.info("              ___'. .'  /--.--\  `. .'___ ")
logger.info("           .'' '<  `.___\_<|>_/___.' >' ''. ")
logger.info("          | | :  `- \`.;`\ _ /`;.`/ - ` : | | ")
logger.info("          \  \ `_.   \_ __\ /__ _/   .-` /  / ")
logger.info("      =====`-.____`.___ \_____/___.-`___.-'===== ")
logger.info("                        `=---='")
logger.info("")
logger.info("")
logger.info("      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
logger.info("")
logger.info("            佛祖保佑     永不宕机     永无BUG")
logger.info("                  btc-memz-plugin 启动！              ")
