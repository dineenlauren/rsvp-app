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
          md="4"
          type="button"
          v-bind:href="cb"
          target="_blank"
          class="col-style"
        >
          <h1 class="subheading">Crate &amp; Barrel</h1>
          <p>Shop this Registry</p>
        </b-col>
        <b-col
          md="4"
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
          md="4"
          type="button"
          v-bind:href="amazon"
          target="_blank"
          class="col-style"
        >
          <h1 class="subheading">Amazon</h1>
          <p>Shop this Registry</p>
        </b-col>
        <b-col
          md="4"
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
    name: 'FAQs',
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
    background-color: #e07245;
  }

  p {
    color: #f7f89c;
    font-weight: 600;
    text-transform: uppercase;
  }

  .subheading {
    font-weight: 200;
    font-size: 1.5rem;
  }
  .col-style {
    border: 2px solid rgba(247, 248, 156, 0.685);
    padding: 2rem 1rem;
    margin: 1rem;
  }
  .col-style:hover {
    text-decoration: none;
    background-color: rgba(247, 248, 156);
  }
  .col-style:hover > .subheading {
    color: #e07245;
  }
  .col-style:hover > p {
    color: #909456;
  }
</style>
