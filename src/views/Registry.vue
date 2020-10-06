<template>
  <div class="registry">
    <!-- PAGE TITLE -->
    <header>
      <Welcome :subTitle="subTitle" :title="title" />
    </header>
    <!-- DETAILS SECTION -->
    <b-container class="t-center">
      <b-row class="justify-content-md-center">
        <b-col
          lg="7"
          type="button"
          v-bind:href="cb"
          target="_blank"
          class="col-style"
        >
          <h1 class="subheading">Crate &amp; Barrel</h1>
          <p>Shop this Registry</p>
        </b-col>
        <b-col
          lg="7"
          type="button"
          v-bind:href="zola"
          target="_blank"
          class="col-style"
        >
          <h1 class="subheading">Z O L A</h1>
          <p>Shop this Registry</p>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center">
        <b-col
          lg="7"
          type="button"
          v-bind:href="amazon"
          target="_blank"
          class="col-style"
        >
          <h1 class="subheading">Amazon</h1>
          <p>Shop this Registry</p>
        </b-col>
        <b-col
          lg="7"
          type="button"
          v-bind:href="we"
          target="_blank"
          class="col-style"
        >
          <h1 class="subheading">West Elm</h1>
          <p>Shop this Registry</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Welcome from '../components/Welcome';
  export default {
    name: 'Registry',
    components: { Welcome },
    data() {
      return {
        cb: 'https://www.crateandbarrel.com/gift-registry/#',
        zola: 'https://www.zola.com/registry/#',
        amazon: 'https://www.amazon.com/wedding/home/#',
        we: 'https://www.westelm.com/registry/#',
        subTitle: 'Wedding',
        title: 'Registry',
      };
    },
  };
</script>

<style scoped>
  .registry {
    background-color: #d09425;
  }

  p {
    color: #d0591c;
    font-weight: 600;
    text-transform: uppercase;
  }

  .subheading {
    font-weight: 200;
    font-size: 2rem;
  }
  .col-style {
    border: 2px solid white;
    background-color: #e2b941;
    padding: 2rem 1rem;
    margin: 1rem;
  }
  .col-style:hover {
    text-decoration: none;
    background-color: #d0591c;
  }
  .col-style:hover > .subheading {
    color: white;
  }
  .col-style:hover > p {
    color: #ffd558;
  }
</style>
