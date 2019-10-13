const { description } = require("../../package");

module.exports = {
  title: "Vuepress Docs Boilerplate",

  description: description,

  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ]
  ],

  themeConfig: {
    editLinks: true,
    lastUpdated: false,
    nav: [
      {
        text: "Guide",
        link: "#guide"
      },
      {
        text: "Demo",
        link: "#demo"
      },
      {
        text: "VuePress",
        link: "https://v1.vuepress.vuejs.org"
      }
    ],
    sidebar: {
      "/": [
        {
          title: "Guide",
          collapsable: false
        },
        {
          title: "Demo",
          collapsable: false
        }
      ]
    }
  },

  plugins: [[require("../../src/index"), { shortname: "vuepress-plugin-blog" }]]
};
