export const data = JSON.parse("{\"key\":\"v-1abeb040\",\"path\":\"/_posts/2019-6-8-vueconf.html\",\"title\":\"VueConf\",\"lang\":\"en-US\",\"frontmatter\":{\"tag\":[\"vue\",\"vueconf\"]},\"excerpt\":\"\",\"headers\":[]}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
