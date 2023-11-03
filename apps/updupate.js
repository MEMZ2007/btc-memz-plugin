import {exec} from 'child_process'
// 引入插件模块
import plugin from '../../../lib/plugins/plugin.js'
// 引入模块创建器
import { createRequire } from 'module'
// 引入lodash模块
import _ from 'lodash'
// 引入common模块
import common from "../../../lib/common/common.js"

export class up  extends plugin {
// 构造函数，接收一个参数e
  constructor(e) {
    // 定义一个任务对象
    this.task = {
      // 任务调度，每天4点执行一次
      cron: '0 0 4 * * ?',
      // 任务名称
      name: 'BTC自动更新任务',
      // 任务函数
      fnc: 'bupdate',
    }
  }
 async bupdate() {
    // 获取插件路径
    const _path = './plugins/btc-memz-plugin/'
    // 执行强制更新操作
    let command = `git -C ${_path} reset --hard origin && ${command}`
        logger.info(logger.blue('btc正在执行强制更新操作，请稍等'));
    // 获取插件最后更新时间
    let time = await this.getTime('btc-memz-plugin')
    // 打印插件最后更新时间
    logger.mark(`${this.e.logFnc} 最后更新时间：${time}`)
    // 返回true
    return true
}
}