<template>
  <div id="app">
    <div id="nav" class="mb-5">
      <SiteNav />
    </div>
    <router-view />
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

<style>
  .page-title {
    margin: 40px 0 0;
    font-size: 3rem;
  }
  .rsvp-title {
    font-size: 4rem;
    margin: 40px 0 0 0;
  }
  /* .message {
    line-height: 2rem;
  } */
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
