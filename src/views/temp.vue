<template>
  <div class="registry">
    <!-- PAGE TITLE -->
    <div class="container">
      <p class="subtitle t-align-end">Wedding</p>
      <h1 class="title">Registry</h1>
    </div>
    <!-- DETAILS SECTION -->
    <b-container fluid class="t-center">
      <b-row class="justify-content-center">
        <b-col sm="4" class="col-style">
          <p class="subheading">Crate &amp; Barrel</p>
          <a v-bind:href="cb" target="_blank">Shop this Registry</a>
        </b-col>
        <b-col sm="4" class="col-style">
          <p class="subheading">Z O L A</p>
          <a v-bind:href="zola" target="_blank">Shop this Registry</a>
        </b-col>

        <b-col sm="4" class="col-style">
          <p class="subheading">Amazon</p>
          <a v-bind:href="amazon" target="_blank">Shop this Registry</a>
        </b-col>
        <b-col sm="4" class="col-style">
          <p class="subheading">West Elm</p>
          <a v-bind:href="we" target="_blank">Shop this Registry</a>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'FAQs',
    data() {
      return {
        cb: 'https://www.crateandbarrel.com/gift-registry/#',
        zola: 'https://www.zola.com/registry/#',
        amazon: 'https://www.amazon.com/wedding/home/#',
        we: 'https://www.westelm.com/registry/#',
      };
    },
  };
</script>

<style scoped>
  .registry {
    background-color: #e07245;
  }
  .container {
    padding: 2rem;
  }
  p {
    margin: 0;
  }

  .subheading {
    color: #d9857d;
    font-weight: 100;
    font-size: 1.7rem;
    margin: 0;
  }
  a {
    color: rgb(148, 148, 148);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  .col-style {
    border: 1px solid rgba(0, 0, 0, 0.125);
    padding: 10px;
    margin: 10px;
  }

  @media (min-width: 768px) {
    /* h1 {
      font-size: 2.4rem;
      margin: auto;
      width: 60%;
    }
    .title {
      font-size: 1.4rem;
      margin: auto;
      width: 60%;
    }
    .title-container {
      padding: 1rem;
    } */
  }
</style>
