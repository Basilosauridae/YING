import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  title: '影大宝',
  description: 'Just playing around',
  theme: 'reco',
  themeConfig: {
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: '影大宝',
    authorAvatar: '/avator.png',
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '',
    // series 为原 sidebar
    series: {
      '/docs/theme/': [
        {
          text: 'CSS样式',
          children: ['reset', 'shadow', 'whirligig']
        }
      ],
      '/docs/guide/':[
        {
          text:'影大宝日志',
          children:['introduce','mycat','standard']
        }
      ],
      '/docs/vue/':[
        {
          text:'关于vue',
          children:['theCore','vue3']
        }
      ]
    },
    navbar:
    [
      { text: 'Home', link: '/'},
      { text: 'Docs',
      children: [
        { text: '影大宝日志', link: '/docs/guide/introduce' },
        { text: 'vue', link: '/docs/vue/theCore' },
        { text: 'css', link: '/docs/theme/reset' }
      ]
      },
      { text: 'Tags', link: '/tags/Node/1/' },
      {
        text: 'Contact Me',
        children: [
          { text: '语雀', link: 'https://www.yuque.com/lumang-40tj6' },
          { text: 'github', link: 'https://github.com/Basilosauridae' },
          { text:'wordpress',link:'https://www.cozo.com/' }
        ]
      }
    ],
    plugins:[
     
    ]
  },
  // debug: true,
})