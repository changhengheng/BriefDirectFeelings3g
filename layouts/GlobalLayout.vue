<template>
  <div id="global-layout">
    <header style="background-color: #DDD">
      <router-link to="/">{{ $site.title }}</router-link>· <router-link to="/_dynamicActivities/">Dynamic Activities</router-link>· <router-link to="/tag/">Tag</router-link>· <router-link to="/nav/">Nav</router-link>
    </header><br>
    <DefaultGlobalLayout/><br>
    <footer style="background-color: #DDD"><a href="https://github.com/ulivz/70-lines-of-vuepress-blog-theme">Github</a> · Powered by VuePress</p>
</footer>
  </div>
</template>

<script>
  import GlobalLayout from '@app/components/GlobalLayout.vue'
  
  export default {
    components: { DefaultGlobalLayout: GlobalLayout },
  }
</script>
