import plugin from '../../../lib/plugins/plugin.js'
import axios from 'axios'

export class NewsPlugin extends plugin {
    constructor() {
        super({
            name: '新闻插件',
            dsc: '获取时政要闻',
            event: 'message',
            priority: 10,
            rule: [
                {                    
                    reg: '^#新闻(\\d+)?$',
                    fnc: 'getNews'
                }
            ]
        })
    }

    async getNews() {
        const num = this.match[1] || 5; // 默认获取5条新闻，可通过命令指定数量，例如：#新闻10

        try {
            const response = await axios.get(`https://xiaoapi.cn/API/zs_xw.php?num=${num}`);
            const data = response.data;

            if (data.code === 200) {
                const newsList = data.msg.split('\n');
                let newsMessage = '';
                newsList.forEach((news, index) => {
                    newsMessage += `${index + 1}、${news}\n`;
                });

                await this.reply(newsMessage);
            } else {
                await this.reply('抱歉，无法获取新闻数据。');
            }
        } catch (error) {
            console.error(error);
            await this.reply('获取新闻时发生错误。');
        }
    }
}
