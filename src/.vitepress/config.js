const asyncSidebar = [
  { text: 'Async Week', link: '/async-week/' },
  { text: 'Day 1', link: '/async-week/1' },
]

module.exports = {
  lang: 'en-US',
  title: 'Algo & Jest & Docs 😍',
  description: 'Algos, tested with Jest, with docs 🦾',

  themeConfig: {
    // repo: 'iseykim/algos-jest',
    // docsDir: 'src'
    //
    // editLinks: true
    // editLinkText: 'Edit this page on Github'
    // lastUpdated: 'Last Updated'

    nav: [
      { text: 'Async Week', link: '/async-week/' },
      { text: 'Grokking', link: '/grokking/', activeMatch: '^/grokking/' },
      { text: 'Sorting', link: '/sorting/' },
      { text: 'Jest', link: '/jest/' },
    ],

    sidebar: {
      // '/async-week': asyncSidebar,
      '/async-week': getAsyncSidebar(),
      // '/': [{ text: 'hello', link: '/' }],
      '/sorting': [{ text: 'Sorting', link: '/sorting/' }],
      '/jest': [{ text: 'jest', link: '/jest/' }],
    },
  },
  // markdown: {
  // },
}

/* if you have children, it wont render dynamic headings */
function getAsyncSidebar() {
  return [
    { text: 'Async Week', link: '/async-week/' }, // without explicit children, the h2 and h3 will automatically be picked up
    { text: '1 - Two Num Sum', link: '/async-week/1-two-num-sum/' },
    { text: '2 - Max Profit', link: '/async-week/2-max-profit/' },
  ]
}
