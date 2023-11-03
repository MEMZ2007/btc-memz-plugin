import plugin from '../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';

export class BtcPlugin extends plugin {

  constructor() {
    super({
      name: 'btc',  
      desc: 'btc——api',
      event: 'message',   
      priority: 50,
      rule: [
        {
            reg: '^#?虚拟货币最新信息$',
            fnc: 'btchq'
        },
        {
            reg: '^#?爆笑语录$',
            fnc: 'btccnm',
        },
        {
            reg: '^#?枫叶语录$',
            fnc: 'btcwcnm',
        },
        {
            reg: '^#?域名\s*(.+)',
            fnc: 'getDomainInfo',
          },
          {
            reg: '^#?(域名收录查询|收录查询|反链信息查询|反链查询)\s*(.+)',
            fnc: 'checkDomainInfo'
          },
          {
            reg: '^#?(骚扰|骚扰电话|疑似骚扰电话)(查询|查找|搜索|搜寻)(.*)',
            fnc: 'checkHarass'
          },
          {
            reg: `^#?(oschina-news|oschinanews|开源中国新闻|开源中国)`, 
            fnc: 'fetchOschinaNews' 
          },
          {
            reg: `^#?(Ping|ping)(.*)`,
            fnc: 'cjping'
          },
          {
            reg: '^#?骚话文案$',
            fnc: 'getSaohuaWenAn',
          },
          {
            reg: '^#?(weather|天气|天气查询)(.*)',
            fnc: 'queryWeather'
          },
          {
            reg: /^#?(王者攻略|英雄攻略)\s*(.+)/,
            fnc: 'getHeroStrategy',
          },        
          {
            reg: '^#?名言警句录$',
            fnc: 'myjj',
        },
        {
          reg: '^#?枫叶\s*(.+)',
          fnc: 'chat',
        },
        {
          reg: '^#?(emo|EMO)(语录)?$',
          fnc: 'emo',
      },
      ]
    });
  }

  async btchq() {
    const url = 'https://api.coincap.io/v2/assets?limit=20';
    
    try {
      const res = await fetch(url);
      const data = await res.json();
      
      let msg = 'Top 20 币种行情:\n';

      data.data.forEach(item => {
        msg += `${item.name}: \n$${item.priceUsd} \n 24h变动: ${item.changePercent24Hr}%\n`;  
      });

      await this.reply(msg);
      
    } catch (err) {
      console.error(err);
      await this.reply('查询失败,请稍后再试');
    }
  }
  async btccnm(e) {
    try {
      
      const url = 'https://api.wxsszs.cn/api/Ridicule.php';
      
      const response = await fetch(url);
      const data = await response.text();

      await this.reply(data + "🤣👉");

    } catch(err) {
      console.error(err);
      await this.reply('出错了,请重试!');
    }

  }
 async btcwcnm(e) {
    try {
      
      // 定义请求地址
      const url = 'https://api.wxsszs.cn/api/Ridicule.php?msg=5';
      
      // 使用fetch发送请求
      const response = await fetch(url);
      // 获取响应文本
      const data = await response.text();

      // 回复消息
      await this.reply(data + "🤣👉");

    } catch(err) {
      // 打印错误信息
      console.error(err);
      // 回复出错信息
      await this.reply('出错了,请重试!');
    }

  }
 async getDomainInfo(e) {
    // 获取域名
    let domain = e.msg.match(/#?域名\s*(.+)/)[1];
    // 拼接接口请求地址
    let url = `https://api.asilu.com/php/domain.php?domain=${encodeURIComponent(domain)}`;

    try {
      // 发起接口请求
      const response = await fetch(url);
      // 获取接口请求返回的数据
      const data = await response.json();
      let info = '';
      // 判断接口请求是否成功
      if (data.domain) {
        // 获取域名信息
        info = `域名: ${data.domain}\n注册时间: ${data.creation_time}\n过期时间: ${data.expiration_time}\n域名商: ${data.registrar}\nDNS服务器:\n ${data.dns_servers.join('\n')}`;
      } else {
        info = '查询失败，无法获取域名信息';
      }
      // 返回域名信息
      await this.reply(info);
    } catch (error) {
      console.error('[域名信息查询] 接口请求失败:', error);
      await this.reply('域名信息查询接口请求失败，请联系作者更换接口');
    }
  }
 async checkDomainInfo(e) {
    const messageContent = e.msg; // 获取消息内容
    const domainMatch = messageContent.match(/^(#?(查询域名|域名查询))\s*(.+)/);
  
    // 检查消息是否符合查询域名信息的格式
    if (!domainMatch) {
      await this.reply('请提供要查询的域名。');
      return;
    }
  
    const domain = domainMatch[3]; // 获取域名
  
    // 检查域名是否为空
    if (!domain) {
      await this.reply('请提供要查询的域名。');
      return;
    }
  
    const apiUrl = `https://api.oioweb.cn/api/site/employ?domain=${domain}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      // 检查查询结果是否正常
      if (data.code === 200) {
        const updateDate = data.result.update;
        const recordInfo = data.result.record;
        const antiInfo = data.result.anti;
  
        let replyMsg = `域名：${domain}\n数据更新时间：${updateDate}\n“-”代表未收录\n\nSEO收录信息：\n`;
        for (const searchEngine in recordInfo) {
          replyMsg += `${searchEngine}: ${recordInfo[searchEngine]}\n`;
        }
  
        replyMsg += '\n反链信息：\n';
        for (const searchEngine in antiInfo) {
          replyMsg += `${searchEngine}: ${antiInfo[searchEngine]}\n`;
        }
  
        await this.reply(replyMsg);
      } else {
        await this.reply('未找到相关域名信息。');
      }
    } catch (error) {
      logger.error(error);
      await this.reply('查询域名信息时出现错误。');
    }
  }
 async checkHarass(e) {
    // 从消息中获取手机号
    let phone = e.msg.replace(/#|(骚扰|骚扰电话|疑似骚扰电话)(查询|查找|搜索|搜寻)/g, "");

    // 构建请求地址
    let url = `https://api.oioweb.cn/api/search/harassPhone?phone=${phone}`;
    
    // 发起请求
    let res = await fetch(url).catch(err => logger.error(err));
    res = await res.json();

    let replyMsg;
    // 判断查询结果
    if (res.result.status) {
      replyMsg = `查询结果:\n${phone}已被举报${res.result.num}次,疑似骚扰电话`; 
    } else {
      replyMsg = `${phone}未出现在骚扰电话数据库中`;
    }

    // 回复查询结果
    await this.reply(replyMsg);
  }
  async fetchOschinaNews(e) {
    const url = 'https://query.asilu.com/news/oschina-news?callback=jsonp_5'; 
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.text();
      
      const jsonData = JSON.parse(data.replace(/^.*?{/, '{').replace(/\);?$/, ''));
      
      const newsList = jsonData.list;
      
      let replyMessage = '最新的开源中国新闻：\n';
      for (const news of newsList) {
        replyMessage += `${news.title}\n${news.url}\n\n`;
      }
      await this.reply(replyMessage);
    } catch (error) {
      console.error('Error:', error);
      await this.reply('获取开源中国新闻数据时出错');
    }
  }
  async cjping (e) {
    let msg = e.msg
		let place = msg.replace(/#|(Ping|ping)/g, "").trim();
    let url = `https://api.qingvps.cn/API/ping.php?url=${place}`;
    let res = await fetch(url).catch((err) => logger.error(err))
    if (!res) {
    logger.error('接口请求失败')
    return await this.reply('接口请求失败')
  }
    res = await res.text()
    await this.reply(`${res}`)
 }  
 async getSaohuaWenAn(e) {
    try {
      const response = await fetch('https://v.api.aa1.cn/api/api-saohua/index.php?type=json');
      const data = await response.json();
      await this.reply(data.saohua, true, { recallMsg: 30 });
    } catch (error) {
      console.error('[骚话文案] 接口请求失败:', error);
      await this.reply('骚话文案接口请求失败，请稍后重试');
    }
  }
  async queryWeather(e) {
    let msg = e.msg;
    let city = msg.replace(/#|(weather|天气)/g, '').trim();
    let url = `https://query.asilu.com/weather/baidu?city=${encodeURIComponent(city)}&callback=jsonp_${Math.floor(Math.random() * 1000)}`;

    try {
      let res = await fetch(url);

      if (!res.ok) {
        logger.error('接口请求失败');
        return await this.reply('接口请求失败');
      }

      let data = await res.text();
      let jsonData = data.match(/jsonp_\d+\((.*)\)/);
      
      let result = '';
      if (jsonData) {
        let weatherData = JSON.parse(jsonData[1]);
        result += `城市：${weatherData.city} 更新时间：${weatherData.update_time} 日期：${weatherData.date}\n\n`;
        result += '天气信息：\n\n';

        for (let weather of weatherData.weather) {
          result += `日期：${weather.date} 天气：${weather.weather} 温度：${weather.temp} 风力：${weather.wind}\n`;
        }
      } else {
        result = '未查询到该城市的天气信息';
      }

      await this.reply(result);
    } catch (err) {
      logger.error(err);
      await this.reply('查询失败');
    }
  }
  async getHeroStrategy(e) {
    const message = e.msg;
    logger.info(`Received message: ${message}`); // 添加日志输出

    const match = /^#?(王者攻略|英雄攻略)\s*(.+)/.exec(message);
    logger.info(`Match: ${match}`); // 添加日志输出

    if (!match) {
      await this.reply('无法识别的命令格式，请使用 #王者攻略+英雄名。');
      return;
    }

    const heroName = match[2].trim();
    logger.info(`Received heroName: ${heroName}`);

    const apiUrl = `https://zj.v.api.aa1.cn/api/wz/?msg=${encodeURIComponent(heroName)}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.text();
      await this.reply(data);
    } catch (error) {
      logger.error(error);
      await this.reply('获取英雄攻略信息时出现错误。');
    }
  }
 async myjj(e) {
    try {
      
      // 定义一个请求地址
      const url = 'https://api.xygeng.cn/one';
      
      // 使用fetch函数发送请求
      const response = await fetch(url);
      // 获取响应文本
      const data = await response.text();

      // 回复消息
      await this.reply(data);

    } catch(err) {
      // 打印错误信息
      console.error(err);
      // 回复出错消息
      await this.reply('出错了,请重试!');
    }

  }
 async chat(e) {
    // 获取消息中的关键字
    let Bing = e.msg.match(/#?枫叶\s*(.+)/)[1];
    // 拼接请求地址
    let url = `http://ovoa.cc/api/Bing.php?msg=${encodeURIComponent(Bing)}?&model=down&type=json`;

    try {
      // 发起请求
      const response = await fetch(url);
      // 获取返回数据
      const data = await response.json();
      let info = '';
      // 判断返回数据是否有效
      if (data.content) {
        info = `${data.content}`;
      } else {
        info = '失败！';
      }
      // 回复消息
      await this.reply(info);
    } catch (error) {
      console.error('接口请求失败:', error);
      await this.reply('接口请求失败，请联系作者更换接口');
    }
  }
  async emo(e) {
    try {
      
      const url = 'http://api.sc1.fun/API/emo.php';
      
      const response = await fetch(url);
      const data = await response.text();

      await this.reply(data);

    } catch(err) {
      console.error(err);
      await this.reply('出错了,请重试!');
    }

  }


















































































}