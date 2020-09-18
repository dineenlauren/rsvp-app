<template>
  <div class="home">
    <div class="title-container fluid t-center">
      <h1>Lauren</h1>
      <h1>&amp;</h1>
      <h1>Matthew</h1>
      <p>September 8, 2019</p>
      <router-link class="router-btn" :to="'rsvp'">RSVP</router-link>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Home',
    components: {},
  };
</script>

<style scoped>
  .title-container {
    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      url('https://images.unsplash.com/photo-1583132648365-db96e1ea0c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
    width: 100%;
    height: auto;
    padding: 5rem 2rem;
    /* background-position: center; */
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
  }
  h1 {
    text-transform: uppercase;
    letter-spacing: 0.5rem !important;
    font-family: serif;
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    font-family: serif;
  }
</style>
