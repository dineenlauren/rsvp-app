<template>
  <div id="app">
    <div id="nav">
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
  /* .page-title {
    margin: 40px 0 0;
    font-size: 3rem;
  } */
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

  #app {
    color: white;
  }

  .router-btn {
    color: white;
    border: 3px solid white;
    background-color: rgba(255, 255, 255, 0);
    padding: 0.5rem 3rem;
  }

  .router-btn:hover {
    color: white;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.294);
  }

  .t-center {
    text-align: center;
  }
  .t-end {
    text-align: end;
  }
  .title {
    font-size: 1.4rem;
    margin: auto;
  }

  .subheading {
    color: #d9857d;
    font-size: 1rem;
    font-variant: small-caps;
  }
  /* TEMP STYLING */
  .red {
    background-color: rgba(255, 0, 0, 0.411);
  }
  .red-outline {
    border: 1px solid red;
  }

  .blue {
    background-color: rgba(0, 0, 255, 0.4115);
  }
  .blue-outline {
    border: 1px solid blue;
  }
  .purple {
    background-color: rgba(128, 0, 128, 0.4115);
  }
  .purple-outline {
    border: 1px solid purple;
  }
</style>
