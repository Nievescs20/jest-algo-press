const sidebar = []

const algoSidebar = []

module.exports = {
  title: 'Algo & Jest & Docs 😍',
  description: 'Algos, tested with Jest, with docs 🦾',
  themeConfig: {
    nav: [
      { text: 'Async Week', link: '/async-week/' },
      { text: 'Grokking', link: '/grokking/' },
    ],
    sidebar: {
      '/': [{ text: 'hello', link: '/' }],
      '/grokking': [{ text: 'specific to grokking', link: '/' }],
    },
  },
}
