<template>
  <div class="rsvp">
    <!-- PAGE TITLE -->
    <!-- <div class="container t-center">
      <h1 v-if="!userProfile.guest" class="title">
        {{ userProfile.name }}
      </h1>
      <h1 v-if="userProfile.guest" class="title">
        {{ userProfile.name }} & {{ userProfile.guest }}
      </h1>
      <h1 class="subtitle">you have been cordially invited</h1>
    </div> -->

    <header>
      <Welcome
        v-if="!userProfile.guest"
        :title="userProfile.name"
        :subTitle="subTitle"
      />
      <Welcome
        v-if="userProfile.guest"
        :title="userProfile.name + ' & ' + userProfile.guest"
        :subTitle="subTitle"
      />
    </header>

    <b-container>
      <!-- Update RSVP Status -->
      <div class="row">
        <div class="col-md-8 offset-md-2">
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
            <button block type="submit" class="btn btn-secondary">
              Submit RSVP
            </button>
          </b-form>
        </div>
      </div>
      <!-- Success Message -->
      <transition name="fade">
        <p v-if="showSuccess" class="success t-center">
          Thank you. Your RSVP has been updated.
        </p>
      </transition>
      <a type="button" class="btn" @click="logout()">Logout</a>
    </b-container>
  </div>
</template>

<script>
  import Welcome from '../components/Welcome';
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
      Welcome,
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

<style scoped>
  .rsvp {
    background-color: #d69d8b;
  }
  .title {
    font-size: 3rem;
    margin: 0;
    font-family: sans-serif;
    border-bottom: 5px dotted white;
  }
  .subtitle {
    color: rgba(255, 255, 255, 0.814);
    letter-spacing: 2px;
    font-size: 1.3rem;
    border-bottom: none;
  }
  .page-header {
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
  .success {
    font-size: 1.5rem;
    padding: 1rem;
  }
  .btn {
    margin-top: 1rem;
    width: 100%;
  }
  .guestForm {
    margin-top: 1rem;
  }

  .guestForm button {
    color: white;
    background-color: #e17534;
    border: 2px solid white;
    border-radius: 0.25rem;
    margin-top: 0.5rem;
  }
  a.btn {
    color: white;
    margin-top: 1rem;
  }
</style>
