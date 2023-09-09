import fs from 'node:fs'
import chalk from 'chalk'

const foldersToLoad = ['./plugins/btc-memz-plugin/apps', './plugins/btc-memz-plugin/apps/cmd', './plugins/btc-memz-plugin/apps/api']

let apps = {}

for (const folder of foldersToLoad) {
  const files = fs.readdirSync(folder).filter(file => file.endsWith('.js'))

  files.forEach((file) => {
    const filePath = `${folder}/${file}`
    const name = file.replace('.js', '')

    try {
      const plugin = await import(filePath)
      apps[name] = plugin
    } catch (error) {
      logger.error(`载入插件错误：${name}`)
      logger.error(error)
    }
  })
}

logger.info(`\n\t${chalk.white(`┌───────────────────────────┐`)}\t\n\t${chalk.cyan(`「btc-memz-plugin载入中···」`)}\n\t${chalk.blue(`「载入成功！」`)}\n\t${chalk.yellow(`「交流群号：235589956   」`)}\n\t${chalk.white(`└───────────────────────────┘`)}
\t\n\t${chalk.cyan(`原谅我孤陋寡闻，不知先生心里一直有人。`)}\t\n\t
\t\n\t${chalk.cyan(`因为喜欢你所以想借着你的光去看看从未见过的世界。`)}\t\n\t
\t\n\t${chalk.cyan(`我好像一直在放弃他，又好像一直在等他。`)}\t\n\t
\t\n\t${chalk.cyan(`所有不合时宜的相遇啊，都遗憾得令人心疼。`)}\t\n\t
\t\n\t${chalk.cyan(`我怕他知道，怕他不知道，怕他装作不知道。`)}\t\n\t
\t\n\t${chalk.cyan(`我没有在等他，我在等心死。`)}\t\n\t
\t\n\t${chalk.cyan(`难过怎么说得清楚，失落又怎能感同身受。`)}
\t`);

export { apps }
