import fs from 'node:fs'
import chalk from 'chalk'

// 定义要加载的文件夹路径列表
const foldersToLoad = ['./plugins/btc-memz-plugin/apps', './plugins/btc-memz-plugin/apps/cmd', './plugins/btc-memz-plugin/apps/api']

// 用于存储所有加载的插件
let apps = {}

for (const folder of foldersToLoad) {
  // 获取文件夹中以.js结尾的文件列表
  const files = fs.readdirSync(folder).filter(file => file.endsWith('.js'))

  files.forEach((file) => {
    // 构建完整的文件路径
    const filePath = `${folder}/${file}`
    const name = file.replace('.js', '')

    try {
      // 动态导入插件并添加到apps对象中
      const plugin = await import(filePath)
      apps[name] = plugin
    } catch (error) {
      logger.error(`载入插件错误：${name}`)
      logger.error(error)
    }
  })
}

logger.info(`\n\t${chalk.white(`┌───────────────────────────┐`)}\t\n\t${chalk.cyan(`「btc-memz-plugin载入中···」`)}\n\t${chalk.blue(`「载入成功！」`)}\n\t${chalk.yellow(`「交流群号：235589956   」`)}\n\t${chalk.white(`└───────────────────────────┘`)}\t`);

export { apps }
