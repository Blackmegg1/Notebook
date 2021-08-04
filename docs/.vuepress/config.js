const headConf = require('./config/headConf');
const pluginsConf = require('./config/pluginsConf');
const sidebaronf = require('./config/sidebarConf');
const navConf = require('./config/navConf');

module.exports = {
    title: "我的笔记本",
    head: headConf,
    plugins: pluginsConf,
    themeConfig: {
        logo: '/assets/img/hero.png',
        lastUpdated: '更新时间',
        nav: navConf,
        sidebar: sidebaronf
    }
}