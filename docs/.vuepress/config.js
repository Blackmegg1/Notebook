module.exports = {
    title: "我的笔记本",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'author', content: 'Blackmegg1' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' }],
        // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    themeConfig: {
        logo: '/assets/img/hero.png',
        lastUpdated: '更新时间',
        plugins: [
            [
               '@vuepress/pwa', {
                  serviceWorker: true,
                  updatePopup: {
                    message: "发现了新的内容",
                    buttonText: "刷新"
                  }
                }
            ]
            ],
        nav: [
            { text: 'External', link: 'https://google.com', target: '_self', rel: '' },
            { text: 'About', link: '/about', target: '_blank' }
        ],
        sidebar: [
            '',
            '/about',
            '/about1',
        ]
    }
}