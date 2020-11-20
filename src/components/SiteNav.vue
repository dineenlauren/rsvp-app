<template>
  <section>
    <b-navbar toggleable="md" type="light" variant="light" fixed="top">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto" fixed="top">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/wedding">Wedding</b-nav-item>
          <b-nav-item to="/registry">Registry</b-nav-item>
          <b-nav-item to="/rsvp">RSVP</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"></b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </section>
</template>

<script>
  export default {
    name: 'SiteNav',
  };
</script>
