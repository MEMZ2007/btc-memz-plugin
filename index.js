import chalk from 'chalk'
import { appsOut } from './robot/index.js';
const apps = await appsOut({ AppsName: 'apps' }).then(req => {
  logger.info(`\n\t${chalk.white(`┌────────────────────────────┐`)}\t\n\t${chalk.cyan(`「btc-memz-plugin载入中···」`)}\n\t${chalk.blue(`「载入成功！」`)}\n\t${chalk.yellow(`「交流群号：235589956   」`)}\n\t${chalk.white(`└───────────────────────────┘`)}\t`);
  return req;
});
export { apps };