<template>
  <div class="container">
    <b-row class="justify-content-md-center">
      <b-col lg="7">
        <p class="subtitle t-align-end">{{ subTitle }}</p>
        <h1 class="title">{{ title }}</h1>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'Welcome',
    props: {
      title: String,
      subTitle: String,
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
  div.col-lg-7 {
    padding: 1rem;
  }
</style>
