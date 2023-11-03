/*
 * @Author: 枫林 670979892@qq.com
 * @Date: 2023-11-03 20:41:09
 * @LastEditors: 枫林 670979892@qq.com
 * @LastEditTime: 2023-11-04 07:49:28
 * @FilePath: \MEMZ\btc-memz-plugin\apps\updupate.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { exec } from 'child_process'
import plugin from '../../../lib/plugins/plugin.js'
import { createRequire } from 'module'
import _ from 'lodash'
import common from "../../../lib/common/common.js"
import { ThePath } from "../app.config.js"

export class Bup extends plugin {
  // 构造函数，接收一个参数e
  constructor(e) {
    // 定义一个任务对象
    task = {
      // 任务调度，每天4点执行一次
      cron: '0 0 4 * * ?',
      // 任务名称
      name: 'BTC自动更新任务',
      // 任务函数
      fnc: 'bupdate',
    }
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