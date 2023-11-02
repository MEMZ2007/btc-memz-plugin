import chalk from 'chalk'
import { appsOut } from './robot/index.js';
const apps = await appsOut({ AppsName: 'apps' }).then(req => {
  logger.info(`\n\t${chalk.white(`┌────────────────────────────┐`)}\t\n\t${chalk.cyan(`「btc-memz-plugin载入中···」`)}\n\t${chalk.blue(`「载入成功！」`)}\n\t${chalk.yellow(`「交流群号：235589956   」`)}\n\t${chalk.white(`└───────────────────────────┘`)}\t`);
  logger.info("\n")
  logger.info("\n                        _oo0oo_")
  logger.info("\n                       o8888888o")
  logger.info("\n                       88' . '88")
  logger.info("\n                       (| -_- |)")
  logger.info("\n                       0\  =  /0")
  logger.info("\n                     ___/`---'\___")
  logger.info("\n                   .' \\|     |// '.")
  logger.info("\n                  / \\|||  :  |||// \ ")
  logger.info("\n                 / _||||| -:- |||||- \ ")
  logger.info("\n                |   | \\\  - /// |   | ")
  logger.info("\n                | \_|  ''\---/''  |_/ | ")
  logger.info("\n                \  .-\__  '-'  ___/-. / ")
  logger.info("\n              ___'. .'  /--.--\  `. .'___ ")
  logger.info("\n           .'' '<  `.___\_<|>_/___.' >' ''. ")
  logger.info("\n          | | :  `- \`.;`\ _ /`;.`/ - ` : | | ")
  logger.info("\n          \  \ `_.   \_ __\ /__ _/   .-` /  / ")
  logger.info("\n      =====`-.____`.___ \_____/___.-`___.-'===== ")
  logger.info("\n                        `=---='")
  logger.info("\n ")
  logger.info("\n ")
  logger.info("\n      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
  logger.info("\n")
  logger.info("\n            佛祖保佑     永不宕机     永无BUG")
  logger.info("\n")
  return req;
});
export { apps };