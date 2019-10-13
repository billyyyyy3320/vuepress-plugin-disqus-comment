const { description } = require("../../package");

module.exports = {
  title: "vuepress-plugin-disqus",

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
    repo: "newsbielt703/vuepress-plugin-disqus",
    sidebar: "auto",
    smoothScroll: true
  },

  plugins: [[require("../../src/index"), { shortname: "vuepress-plugin-blog" }]]
};
