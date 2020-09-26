<template>
  <div class="welcome">
    <h1 class="rsvp-title">{{ rsvpTitle }}</h1>
    <h1 class="message">you have been cordially invited</h1>
  </div>
</template>

<script>
  export default {
    name: 'Welcome',
    props: {
      msg: String,
      rsvpTitle: String,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .rsvp-title {
    font-size: 4rem;
    margin: 0;
    font-family: sans-serif;
  }
  .message {
    color: rgba(255, 255, 255, 0.63);
    line-height: 2rem;
    font-size: 2rem;
    font-family: sans-serif;
  }
</style>
