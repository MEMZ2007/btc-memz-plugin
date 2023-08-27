/*
* 此配置文件为系统使用，请勿修改，否则可能无法正常使用
*
* 如需自定义配置请复制修改上一级help_default.js
*
* */
export const helpCfg = {
  title: 'BTC帮助',
  subTitle: 'MEMZ-bot && btc-memz-plugin',
  columnCount: 4,
  colWidth: 198.75,
  theme: 'all',
  themeExclude: ['default'],
  style: {
    fontColor: '#ceb78b',
    descColor: '#eee',
    contBgColor: 'rgba(6, 21, 31, .5)',
    contBgBlur: 4,
    headerBgColor: 'rgba(6, 21, 31, .4)',
    rowBgColor1: 'rgba(6, 21, 31, .2)',
    rowBgColor2: 'rgba(6, 21, 31, .35)'
  },
  bgBlur: false
}

export const helpList = [
{
  group: '币种功能',
  list: [{
    icon: 37,
    title: 'dnx',
    desc: 'cnm！'
  }, {
    icon: 38,
    title: 'kas',
    desc: 'cnm！'
  }, {
    icon: 39,
    title: 'rvn',
    desc: 'cnm！'
  }, {
    icon: 40,
    title: 'btc',
    desc: 'cnm！'  
  }, {
    icon: 41,
    title: 'chia',
    desc: 'cnm！'
  }, {
    icon: 42,
    title: 'clore',
    desc: 'cnm！'
  }, {
    icon: 43,
    title: 'doge',
    desc: 'cnm！'
  }, {
    icon: 44,
    title: 'ergo',
    desc: 'cnm！'
  }, {
    icon: 45,
    title: 'eth',
    desc: 'cnm！'
  }, {
    icon: 46,
    title: 'nexa',
    desc: 'cnm！'
  }, {
    icon: 47,
    title: 'neoxa',
    desc: 'cnm！'
  }, {
    icon: 48,
    title: 'rxd',
    desc: 'cnm！'
  }, {
    icon: 49,
    title: 'xch',
    desc: 'cnm！'
  }, {
    icon: 50,
    title: 'meme',
    desc: 'cnm！'
  }, {
    icon: 51,
    title: 'pepe',
    desc: 'cnm！'
  }]
  }, { 
    group: '站长工具', 
    list: [{ 
    icon: 34, 
    title: '#ping+网址', 
    desc: 'ping网站测速' 
}]
}, { 
    group: '管理命令，仅管理员可用', 
    auth: 'master', 
    list: [{ 
    icon: 35, 
    title: '#btc(强制)更新', 
    desc: '(强制)更新BTC插件' 
},{ 
    icon: 25, 
    title: '#cmd', 
    desc: '执行一些简单的命令' 
}]
}]
export const isSys = true