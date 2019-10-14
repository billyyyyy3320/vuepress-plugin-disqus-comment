import VueDisqus from "vue-disqus";
export default ({ Vue }) => {
  const options = JSON.parse(DISQUS_OPTIONS);

  Vue.use(VueDisqus);

  const DisqusComponent = Vue.component("VueDisqus");

  Vue.component("vue-disqus", {
    functional: true,
    render(h, { parent, props }) {
      // SSR-friendly
      if (parent._isMounted) {
        return h(DisqusComponent, {
          // Priority: VuePress's $lang as default language < global configuration < props
          props: Object.assign({ language: parent.$lang }, options, props)
        });
      } else {
        parent.$once("hook:mounted", () => {
          parent.$forceUpdate();
        });
      }
    }
  });
};
