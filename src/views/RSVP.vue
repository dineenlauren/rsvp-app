<template>
  <div class="rsvp">
    <!-- PAGE TITLE -->
    <header class="page-header t-center">
      <b-container fluid>
        <b-row class="justify-content-md-center">
          <b-col lg="7">
            <h1 v-if="!userProfile.guest" class="title">
              {{ userProfile.name }} {{ userProfile.nameLast }}
            </h1>
            <h1 v-else class="title">
              {{ userProfile.name }} & {{ userProfile.guest }}
            </h1>
            <h1 class="subtitle t-align-end">
              you have been cordially invited
            </h1>
          </b-col>
        </b-row>
      </b-container>
    </header>

    <!-- Update RSVP Status -->
    <b-container class="form-wrapper">
      <b-row class="justify-content-sm-center form-border">
        <b-col>
          <h2 class="form-title t-center">RSVP</h2>

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
            <b-form-group
              v-if="userProfile.guest"
              :label="userProfile.guest + ' ' + userProfile.guestLast + ':'"
            >
              <b-form-select
                id="status"
                v-model="userProfile.status2"
                :options="options"
                required
              >
              </b-form-select>
              <a
                v-if="userProfile.guest"
                type="button"
                class="btn"
                @click="removeGuest"
                ><b-icon icon="x-circle"></b-icon>Remove Guest
              </a>
            </b-form-group>

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
            <button block type="submit" class="btn btn-secondary">
              Submit RSVP
            </button>
          </b-form>
        </b-col>
      </b-row>
      <div class="t-center">
        <a type="button" class="btn " @click="logout()">
          Logout
        </a>
      </div>
      <!-- Success Message -->
      <transition name="fade">
        <p v-if="showSuccess" class="success t-center">
          Thank you. Your RSVP has been updated.
        </p>
      </transition>
    </b-container>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import {
    BIcon,
    BIconXCircle,
    BIconPlusCircleFill,
    BIconDashCircle,
  } from 'bootstrap-vue';

  export default {
    name: 'rsvp',
    components: {
      BIcon,
      BIconXCircle,
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
        subTitle: 'you have been cordially invited',
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
      logout() {
        this.$store.dispatch('logout');
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
