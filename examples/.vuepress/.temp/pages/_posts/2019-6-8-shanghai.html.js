export const data = JSON.parse("{\"key\":\"v-b5ef0346\",\"path\":\"/_posts/2019-6-8-shanghai.html\",\"title\":\"Shanghai\",\"lang\":\"en-US\",\"frontmatter\":{\"tag\":[\"vue\",\"shanghai\"]},\"excerpt\":\"\",\"headers\":[]}")

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
