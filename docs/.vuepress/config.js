module.exports = {
    head:[
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta',{name:'author', content:'Blackmegg1'}],
      ],
    themeConfig: {
      logo: '/assets/img/hero.png',
      lastUpdated: '更新时间',
      nav: [
        { text: 'External', link: 'https://google.com', target:'_self', rel:'' },
        { text: 'About', link: '/about', target:'_blank' }
      ],
      sidebar: [
          '',
          'about',
          'about1',
      ]
    }
  }