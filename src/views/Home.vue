<template>
  <section class="home t-center">
    <h1>Lauren</h1>
    <h1>&amp;</h1>
    <h1>Matthew</h1>
    <p>September 8, 2019</p>
    <div class="m-4">
      <router-link class="router-btn" :to="'rsvp'">RSVP</router-link>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Home',
    components: {},
  };
</script>

<style scoped>
  .home {
    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      url('../assets/background.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 70px 10px;
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
