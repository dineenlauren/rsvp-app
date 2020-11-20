<template>
  <div class="about">
    <!-- PAGE TITLE -->
    <header>
      <PageHeader :subTitle="subTitle" :title="title" />
    </header>
    <!-- DETAILS SECTION -->
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col lg="7">
          <router-link class="router-btn" :to="'rsvp'">RSVP</router-link>
        </b-col>
        <b-col lg="7">
          <p class="subheading">When</p>
          <p>September 8th, 2019</p>
          <p>4:00pm</p>
        </b-col>
        <b-col lg="7">
          <p class="subheading">Where</p>
          <p>Lairmont Manor</p>
        </b-col>
        <b-col lg="7">
          <p class="subheading">Parking</p>
          <p>
            While there will be parking available at the venue, no overnight
            parking will be allowed. We recommend using ride share or taxi
            services.
          </p>
        </b-col>
        <b-col lg="7">
          <p class="subheading">Dress Code</p>
          <p>
            Semi-formal. You do not need to wear a tie, a suite jacket, heels or
            a dress if you do not wish to do so. But we do ask to dress in a way
            that is appropriate.
          </p>
        </b-col>
        <b-col lg="6" class=" p-2 mt-5">
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
    </b-container>
  </div>
</template>

<script>
  import PageHeader from '../components/PageHeader';

  export default {
    name: 'About',
    components: { PageHeader },
    data() {
      return {
        subTitle: 'Wedding',
        title: 'Details',
      };
    },
  };
</script>
