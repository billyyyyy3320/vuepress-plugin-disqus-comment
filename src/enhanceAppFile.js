import VueDisqus from "vue-disqus";
export default ({ Vue }) => {
  const options = JSON.parse(DISQUS_OPTIONS);

  Vue.use(VueDisqus);

  const DisqusComponent = Vue.component("VueDisqus");

  Vue.component("vue-disqus", {
    functional: true,
    render(h, { parent, data }) {
      // if (!options.locale) {
      //   if (!data.attrs) {
      //     data.attrs = {};
      //   }
      //   if (!data.attrs.options) {
      //     data.attrs.options = {};
      //   }
      //   if (!data.attrs.options.locale) {
      //     data.attrs.options = Object.assign(
      //       {
      //         locale: parent.$lang || "en"
      //       },
      //       data.attrs.options
      //     );
      //   }
      // }

      // SSR-friendly
      if (parent._isMounted) {
        return h(DisqusComponent, {
          props: {
            ...options
          }
        });
      } else {
        parent.$once("hook:mounted", () => {
          parent.$forceUpdate();
        });
      }
    }
  });
};
