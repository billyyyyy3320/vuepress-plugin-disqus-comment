# vuepress-plugin-Disqus

Disqus is a platform that provides commenting used by hundreds of thousands of websites. This plugin simplifies adding Disqus to your VuePress site.

## Install

First of all, you have to sign up for [Disqus](https://disqus.com/profile/signup/).

```bash
yarn add vuepress-plugin-Disqus -D
# OR npm install vuepress-plugin-Disqus -D
```

## Usage

Take a look at [Using a Plugin](https://vuepress.vuejs.org/plugin/using-a-plugin.html).

```javascript
// .vuepress/config.js
module.exports = {
  plugins: [
    "vuepress-plugin-Disqus",
    {
      /* options */
    }
  ]
};
```

This plugin is based on [vue-disqus](https://github.com/ktquez/vue-disqus#vue-disqus). It has registered a global component - `<vue-disqus/>`. Just put it wherever you like, and Disqus will be embedded in the right place. For example:

```vue
<template>
  <div>
    <Content />
    <!-- ...... -->
    <vue-disqus />
  </div>
</template>
```
Or you can simply put it in your `.md` file.
```markdown
## Hello VuePress

This is a demo.

<vue-disqus/>
```

## Config

Below are the props mentioned in [vue-disqus documentation](https://github.com/ktquez/vue-disqus#props). They're going to be used as [Disqus configuration variables](https://help.disqus.com/en/articles/1717084-javascript-configuration-variables). 

Prop            | Data Type  | required  | Description
--------------- | ---------- | --------- | -----------
`shortname`     | String     | true      | Your shortname disqus.
`url`           | String     | false     | Your URL where Disqus is present
`title`         | String     | false     | Title to identify current page.
`identifier`    | String     | false     | Your unique identifier
`sso_config`    | Object     | false     | Single sign-on (SSO)
`api_key`       | String     | false     | Your API key disqus
`remote_auth_s3`| String     | false     | implementation with Laravel/PHP
`language`      | String     | false     | Language overrides

Actually, They're also all the configuration options for this plugin. It allows you to config globally. What you config will be passed to every `vue-disqus` component. 

## Demo

<vue-disqus />
