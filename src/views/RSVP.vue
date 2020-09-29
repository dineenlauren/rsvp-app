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
            ><a
              v-if="userProfile.guest"
              type="button"
              @click="removeGuest"
              id="tooltip-1"
            >
              <b-icon icon="x-circle"></b-icon> </a
            ><b-tooltip target="tooltip-1" triggers="hover">
              Remove Guest
            </b-tooltip>
            {{ userProfile.guest }} {{ userProfile.guestLast }}:
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
        <div v-if="!userProfile.noGuest && !userProfile.guest">
          <a v-if="!showGuestForm" type="button" @click="toggleForm">
            <b-icon icon="plus-circle-fill"></b-icon> Guest</a
          >

          <a v-if="showGuestForm" type="button" @click="toggleForm"
            ><b-icon icon="dash-circle"></b-icon> Guest</a
          >
          <b-form-group v-if="showGuestForm" class="guestForm">
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
            <button @click.prevent="updateGuest()">
              <b-icon icon="plus-circle-fill"></b-icon>
              Add
            </button>
          </b-form-group>
        </div>
        <b-button block type="submit" class="button">Submit RSVP</b-button>
      </b-form>

      <!-- Success Message -->
      <transition name="fade">
        <p v-if="showSuccess" class="success t-center">
          Thank you. Your RSVP has been updated.
        </p>
        <!-- <p class="success t-center">Thank you. Your RSVP has been updated.</p> -->
      </transition>
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
    BIconPlusCircle,
    BIconPlusCircleFill,
    BIconDashCircle,
  } from 'bootstrap-vue';

  export default {
    name: 'rsvp',
    components: {
      Welcome,
      BIcon,
      BIconChevronDoubleRight,
      BIconChevronDoubleDown,
      BIconXCircle,
      BIconPlusCircle,
      BIconPlusCircleFill,
      BIconDashCircle,
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
        this.$store.dispatch('updateGuest', {
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
        }, 3000);
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
  .success {
    font-size: 1.5rem;
    padding: 1rem;
  }
  .button {
    margin-top: 1rem;
  }
  .guestForm {
    margin-top: 1rem;
  }

  .guestForm button {
    color: white;
    /* background-color: #a4841b; */
    /* background-color: #b73e00; */
    /* background-color: #4c181d; */
    /* background-color: #bf5650; */
    background-color: #e17534;
    border: 2px solid white;
    border-radius: 0.25rem;
    margin-top: 0.5rem;
  }
</style>
