<template>
  <div class="rsvp">
    <b-container class="section-container">
      <header class="page-header">
        <Welcome v-if="!userProfile.guest" :rsvpTitle="userProfile.name" />
        <Welcome
          v-if="userProfile.guest"
          :rsvpTitle="userProfile.name + ' & ' + userProfile.guest"
        />
      </header>
      <transition name="fade">
        <p v-if="showSuccess" class="success">RSVP Updated</p>
      </transition>

      <!-- Update RSVP Status -->

      <b-form @submit.prevent="updateProfile()">
        <b-form-group
          :label="userProfile.name + ' ' + userProfile.nameLast + ':'"
        >
          <b-form-select
            id="status"
            v-model="userProfile.status"
            :options="options"
            required
          >
          </b-form-select>
        </b-form-group>
        <div v-if="userProfile.guest">
          <b-form-group
            :label="userProfile.guest + ' ' + userProfile.guestLast + ':'"
          >
            <b-form-select
              id="status"
              v-model="userProfile.status2"
              :options="options"
              required
            >
            </b-form-select>
          </b-form-group>
        </div>
        <!-- TOGGLE GUEST INPUT FORM -->
        <div
          v-if="!userProfile.noGuest && !userProfile.guest && !showGuestForm"
        >
          <a type="button" @click="toggleForm"
            ><b-icon icon="chevron-double-right"></b-icon> Guest</a
          >
          <a
            type="button"
            @click.prevent="removeGuest()"
            v-if="!userProfile.noGuest && userProfile.guest"
            ><b-icon icon="x-circle"></b-icon>Remove Guest</a
          >
          <a type="button" @click="toggleForm" v-else
            ><b-icon icon="chevron-double-down"></b-icon> Guest</a
          >

          <!-- ADD GUEST INFORMATION -->
          <b-form v-if="showGuestForm" @submit.prevent="updateGuest()">
            <b-form-group label="">
              <b-form-input
                id="guest"
                v-model="addGuest.guest"
                placeholder="First Name"
              ></b-form-input>
              <b-form-input
                id="guestLast"
                v-model="addGuest.guestLast"
                placeholder="Last Name"
              ></b-form-input>
              <b-button type="submit" class="button">Add Guest</b-button>
            </b-form-group>
          </b-form>
        </div>

        <b-button block type="submit" class="button">Submit</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Welcome from '../components/Welcome';
  import {
    BIcon,
    BIconChevronDoubleRight,
    BIconChevronDoubleDown,
    BIconXCircle,
  } from 'bootstrap-vue';

  export default {
    name: 'rsvp',
    components: {
      Welcome,
      BIcon,
      BIconChevronDoubleRight,
      BIconChevronDoubleDown,
      BIconXCircle,
    },

    data() {
      return {
        name: '',
        nameLast: '',
        guest: '',
        guestLast: '',
        status: '',
        status2: '',
        addGuest: {
          guest: '',
          guestLast: '',
        },
        options: [
          { text: 'Select One', value: null, disabled: true },
          'Attending',
          'Not Attending',
        ],
        showSuccess: false,
        showGuestForm: false,
      };
    },
    computed: {
      ...mapState(['userProfile']),
    },
    methods: {
      toggleForm() {
        this.showGuestForm = !this.showGuestForm;
      },
      updateGuest() {
        this.$store.dispatch('updateGuest', {
          guest: this.addGuest.guest,
          guestLast: this.addGuest.guestLast,
        });
        this.showGuestForm = false;
      },
      removeGuest() {
        this.$store.dispatch('removeGuest', {
          guest: '',
          guestLast: '',
          status2: null,
        });
        this.showGuestForm = false;
      },
      updateProfile() {
        this.$store.dispatch('updateProfile', {
          status: this.userProfile.status,
          status2: this.userProfile.status2,
          guest: this.userProfile.guest,
          guestLast: this.userProfile.guestLast,
        });
        this.showSuccess = true;

        setTimeout(() => {
          this.showSuccess = false;
        }, 2000);
      },
    },
  };
</script>

<style scoped>
  .rsvp {
    background-color: #d69d8b;
  }

  .container {
    padding: 2rem;
  }
  .page-header {
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
</style>
