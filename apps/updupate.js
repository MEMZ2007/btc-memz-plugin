import { exec } from 'child_process'
import plugin from '../../../lib/plugins/plugin.js'
import { createRequire } from 'module'
import _ from 'lodash'
import common from "../../../lib/common/common.js"
import { ThePath } from "../app.config.js"

export class Bup extends plugin {
  constructor() {
    super(
      // 定义一个任务对象
      task = {
        // 任务调度，每天4点执行一次
        cron: '0 0 4 * * ?',
        // 任务名称
        name: 'BTC自动更新任务',
        // 任务函数
        fnc: 'bupdate',
      }
    )
  }
  async bupdate() {
    // 执行强制更新操作
    let command = `git -C ${ThePath} pull --no-rebase`
    if (True) {
      command = `git -C ${ThePath} reset --hard origin && ${command}`
      logger.info(logger.blue('BTC插件正在执行更新操作...'))
    }
    return true
  }
}