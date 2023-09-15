/*
* 此配置文件为系统使用，请勿修改，否则可能无法正常使用
*
* 如需自定义配置请复制修改上一级help_default.js
*
* */
export const helpCfg = {
  title: 'BTC帮助',
  subTitle: 'MEMZ-bot && btc-memz-plugin',
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
    title: '#币种列表',
    desc: '查看可供查询的币种列表'
  }]
  }, 
  






    { 
    group: '其他', 
    list: [{ 
    icon: 3, 
    title: '#台风', 
    desc: '查询西太平洋台风位置' 
}, {
    icon: 2,
    title: '#降水',
    desc: '获取降水数据截图'
  }, {
    icon: 2,
    title: '#随机图片/白子/白上吹雪',
    desc: '获取api图片'
  }, {
    icon: 28,
    title: '#骚扰查询+手机号',
    desc: '骚扰电话查询'
  }, {
    icon: 27,
    title: '#天气+地点',
    desc: '各地天气查询'
  }, {
    icon: 7,
    title: '#开源中国',
    desc: '获取开源中国的最新信息'
  }]
}, 
  

  { 
    group: '游戏相关', 
    list: [{ 
    icon: 34, 
    title: '#王者攻略+英雄名', 
    desc: '王者荣耀英雄攻略' 
}]
}, 







  { 
    group: '站长工具', 
    list: [{ 
    icon: 34, 
    title: '#ping+网址', 
    desc: 'ping网站测速' 
}, {
    icon: 42,
    title: '#域名+网址',
    desc: '域名信息查询'
  }, {
    icon: 22,
    title: '#收录查询+网址',
    desc: '域名收录信息查询'
  }]
}, 






{ 
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