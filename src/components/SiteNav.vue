<template>
  <section>
    <b-navbar toggleable="md" type="light" variant="light" fixed="top">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto" fixed="top">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/registry">Registry</b-nav-item>
          <b-nav-item to="/rsvp">RSVP</b-nav-item>
          <!-- <b-nav-item :to="{ name: 'rsvp' }">RSVP</b-nav-item> -->
          <b-nav-item to="/party">Wedding Party</b-nav-item>
          <b-nav-item to="/signup">Sign Up</b-nav-item>
          <b-nav-item @click="logout()">logout</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"></b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <h1 class="page-title">{{ $route.name }}</h1>
  </section>
</template>

<script>
  export default {
    name: 'SiteNav',
    methods: {
      logout() {
        this.$store.dispatch('logout');
      },
    },
  };
</script>

<style scoped>
  a.nav-link {
    text-transform: uppercase !important;
    font-size: 20px !important;
    border: solid 1px rgba(255, 255, 255, 0) !important;
  }
  a.nav-link:hover {
    color: black !important;
    border-top: solid 1px black !important;
    border-bottom: solid 1px black !important;
  }
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  #nav a.router-link-exact-active {
    color: #81948b;
  }
</style>
