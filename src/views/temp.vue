<template>
  <div class="about">
    <!-- PAGE TITLE -->
    <header>
      <Welcome :subTitle="subTitle" :title="title" />
    </header>
    <!-- DETAILS SECTION -->
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col lg="7">
          <b-form v-if="showLoginForm" @submit.prevent>
            <b-row cols="1">
              <b-col class="mb-2">
                <b-form-input
                  id="email1"
                  v-model.trim="loginForm.email"
                  type="text"
                  required
                  placeholder="Username"
                ></b-form-input>
              </b-col>
              <b-col>
                <b-form-input
                  id="password1"
                  v-model.trim="loginForm.password"
                  type="password"
                  required
                  placeholder="Password"
                ></b-form-input>
              </b-col>

              <b-col class="mt-3"
                ><p v-if="errorMsg !== ''" class="error">{{ errorMsg }}</p>
                <button @click="login()" class="router-btn">Log In</button>
                <div>
                  <a type="button" class="btn" @click="toggleForm()">
                    Create an Account
                  </a>
                </div>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Welcome from '../components/Welcome';

  export default {
    name: 'Temp',
    components: { Welcome },
    data() {
      return {
        loginForm: {
          email: '',
          password: '',
        },
        signupForm: {
          name: '',
          nameLast: '',
          guest: null,
          guestLast: null,
          email: '',
          password: '',
          noGuest: false,
          isAdmin: false,
        },
        showLoginForm: true,
        subTitle: 'To RSVP',
        title: 'Login',
        errorMsg: '',
      };
    },
    methods: {
      toggleForm() {
        this.showLoginForm = !this.showLoginForm;
      },

      login() {
        this.$store
          .dispatch('login', {
            email: this.loginForm.email,
            password: this.loginForm.password,
          })
          .catch((err) => {
            console.warn(err);
            this.errorMsg = err.message;
          });
      },
      signup() {
        this.$store.dispatch('signup', {
          name: this.signupForm.name,
          nameLast: this.signupForm.nameLast,
          guest: this.signupForm.guest,
          guestLast: this.signupForm.guestLast,
          email: this.signupForm.email,
          password: this.signupForm.password,
          noGuest: this.signupForm.noGuest,
          isAdmin: this.signupForm.isAdmin,
        });
      },
    },
  };
</script>

<style scoped>
  .about {
    background-color: #bf5650;
  }
  div.col-lg-7 {
    padding: 1rem;
  }
  form {
    max-width: 75%;
  }
</style>
