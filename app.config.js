import path from 'path';
/**自定义全局插件名*/
export const AppName = 'btc-memz-plugin';

export const ThePath = `${path.resolve().replace(/\\/g, '/')}`;
/**自定义全局插件绝对路径*/
export const MyDirPath = `${ThePath}/plugins/${AppName}`;