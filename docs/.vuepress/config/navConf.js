module.exports = [
    { text: '目录', link: '/guide/', target: '_self' },
    {
        text: '前端',
        ariaLabel: '',
        items: [
            { text: 'JavaScript', link: '/frontend/js/', target: '_self' },
            { text: 'CSS', link: '/frontend/css/', target: '_self' },
            { text: 'HTML', link: '/frontend/html/', target: '_self' }
        ]
    },
    {
        text: '计算机',
        ariaLabel: '计算机基础',
        items: [
            { text: '算法', link: '/basic/algorithm/', target: '_self' },
            { text: '计网', link: '/basic/network/', target: '_self' },
            { text: 'Git', link: '/basic/git/', target: '_self' },
        ],
    },
    {
        text: '其他',
        ariaLabel: '其他学科',
        items: [
            { text: '哲学', link: '/other/philosophy/', target: '_self' },
        ],
    },
    { text: '关于', link: '/about/', target: '_self' },
    { text: 'Github', link: 'https://github.com/Blackmegg1/Notebook', target: '_blank' }
]