/*
* 此配置文件为系统使用，请勿修改，否则可能无法正常使用
*
* 如需自定义配置请复制修改上一级help_default.js
*
* */
export const helpCfg = {
  title: 'BTC帮助',
  subTitle: 'Yunzai-bot && btc-memz-plugin',
  columnCount: 3,
  colWidth: 265,
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
  }]
  }, { 
    group: '管理命令，仅管理员可用', 
    auth: 'master', 
    list: [{ 
    icon: 35, 
    title: '#btc更新', 
    desc: '更新BTC插件' 
}]
}]
export const isSys = true