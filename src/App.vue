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

<style>
  #app {
    flex: 1 0 auto;
    color: white;
    font-size: 1.3rem;
  }
  #nav {
    padding: 30px;
  }

  .body2 {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .content2 {
    flex: 1 0 auto;
  }
  .container {
    padding: 2rem;
  }
  p {
    margin: 0 !important;
  }
  .title-container {
    background-color: #d9857d;
    color: white;
    padding: 1rem;
  }

  .title {
    text-transform: uppercase;
    font-family: sans-serif;
    font-size: 3.2rem;
    padding: 0;
  }
  .subtitle {
    font-size: 2rem;
    border-bottom: 5px dotted white;
    letter-spacing: 20px;
    margin: 0;
    text-transform: uppercase;
  }

  .router-btn {
    color: white;
    border: 2px solid white;
    background-color: rgba(27, 27, 27, 0.233);
    padding: 0.5rem 3rem;
  }

  .router-btn:hover {
    color: rgb(255, 255, 255);
    text-decoration: none;
    background-color: rgba(27, 27, 27, 0.466);
  }

  .t-center {
    text-align: center;
  }
  .t-end {
    text-align: end;
  }

  .subheading {
    color: #ffffff;
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  @media (min-width: 768px) {
    .container {
      max-width: 70%;
    }
  }
  /* TEMP STYLING */
  .red {
    background-color: rgba(255, 0, 0, 0.411);
  }
  .red-outline {
    border: 2px solid red;
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
