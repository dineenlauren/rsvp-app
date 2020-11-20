<template>
  <div id="app">
    <div class="body2">
      <div id="nav">
        <SiteNav />
      </div>
      <router-view class="content2" />
    </div>
  </div>
</template>

<script>
  import SiteNav from './components/SiteNav';

  export default {
    components: {
      SiteNav,
    },
  };
</script>
