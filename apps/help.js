import Help from "../model/help.js";
import puppeteer from "../../../lib/puppeteer/puppeteer.js";
import md5 from "md5";
import config from "../model/index.js";
import Version from "../model/version.js";

const _path = process.cwd();
export class help extends plugin {
    constructor(e) {
        super({
            name: "BTC插件帮助",
            dsc: "BTC插件帮助插件帮助",
            event: "message",
            priority: 500,
            rule: [
                {
                    reg: "^#?(btc|BTC|MEMZ|memz)(命令|帮助|菜单)$",
                    fnc: "help",
                },
                {
                    reg: "^#*(btc|BTC|MEMZ|memz)(插件)?版本$",
                    fnc: "version",
                }
            ],
        });
        this.versionData = config.getConfig("version");
    }

    async version() {
        const data = await new Version(this.e).getData(this.versionData.slice(0, 3));
        let img = await puppeteer.screenshot("version", data);
        this.e.reply(img);
    }
    async help() {
        let data = await Help.get(this.e);
        if (!data) {
            return;
        }
        let img = await this.cache(data);
        await this.reply(img);
    }

    async cache(data) {
        let tmp = md5(JSON.stringify(data));
        if (help.helpData.md5 === tmp) {
            return help.helpData.img;
        }

        help.helpData.img = await puppeteer.screenshot("help", data);
        help.helpData.md5 = tmp;

        return help.helpData.img;
    }

    static helpData = {
        md5: "",
        img: "",
    };
}