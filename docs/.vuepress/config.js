const headConf = require('./config/headConf');
const pluginsConf = require('./config/pluginsConf');
const sidebarConf = require('./config/sidebarConf');
const navConf = require('./config/navConf');

module.exports = {
    title: "我的云笔记本",
    head: headConf,
    plugins: pluginsConf,
    themeConfig: {
        logo: '/icons/favicon-32x32.png',
        lastUpdated: '更新时间',
        nav: navConf,
        sidebar: sidebarConf
    }
}