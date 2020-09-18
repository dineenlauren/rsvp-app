<template>
  <div class="about">
    <!-- PAGE TITLE -->
    <div class="container">
      <h1>Wedding</h1>
      <p class="title t-align-end">Details</p>
    </div>
    <!-- DETAILS SECTION -->
    <div class="container t-align-center">
      <b-row>
        <b-col align-self="center" md="4">
          <b-row cols="1" align-v="center">
            <b-col>
              <p class="subheading">When</p>
              <p>September 8th, 2019</p>
            </b-col>
            <b-col>
              <p class="subheading">Where</p>
              <p>Lairmont Manor</p>
            </b-col>
            <b-col class="container">
              <router-link class="router-btn" :to="'rsvp'">RSVP</router-link>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="white-bkgd p-2" md="8">
          <b-embed
            type="iframe"
            aspect="4by3"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.666996094233!2d-122.51052768415032!3d48.71184551896746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485a21e181a3f69%3A0x4d214854d6304dc7!2sLairmont%20Manor!5e0!3m2!1sen!2sus!4v1600383031359!5m2!1sen!2sus"
          >
          </b-embed>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About',
  };
</script>

<style scoped>
  .about {
    background-color: #bf5650;
  }
  .container {
    padding: 2rem;
  }
  h1 {
    border-bottom: 5px dotted white;
    text-transform: uppercase;
    font-family: sans-serif;
    font-size: 3.2rem;
  }
  .title {
    font-size: 2rem;
  }

  .subheading {
    font-size: 1.5rem;
  }

  .white-bkgd {
    background-color: white;
  }
</style>
