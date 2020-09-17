<template>
  <div class="welcome">
    <h1 class="rsvp-title">{{ rsvpTitle }}</h1>
    <h1 class="message">{{ msg }}</h1>
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
<style scoped></style>
