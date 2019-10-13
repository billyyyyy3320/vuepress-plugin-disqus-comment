const { path } = require("@vuepress/shared-utils");

module.exports = options => ({
  name: "Disqus",

  enhanceAppFiles: [path.resolve(__dirname, "enhanceAppFile.js")],

  define: {
    DISQUS_OPTIONS: JSON.stringify(options)
  }
});
