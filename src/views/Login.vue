<template>
  <div id="login">
    <!-- PAGE TITLE -->
    <header>
      <PageHeader :subTitle="subTitle" :title="title" />
    </header>

    <!-- LOGIN FORM -->
    <b-container :class="{ 'signup-form': !showLoginForm }">
      <b-row class="justify-content-md-center">
        <b-col lg="7">
          <b-form v-if="showLoginForm" @submit.prevent>
            <b-row cols="1">
              <b-col>
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

      <!-- SIGN UP FORM -->
      <b-row class="justify-content-md-center">
        <b-col lg="7">
          <b-form v-if="!showLoginForm" @submit.prevent>
            <h1>Sign Up</h1>
            <b-form-group label-for="name">
              <b-form-input
                id="name"
                v-model="signupForm.name"
                type="text"
                required
                placeholder="Name"
              ></b-form-input>
            </b-form-group>

            <b-form-group label-for="nameLast">
              <b-form-input
                id="nameLast"
                v-model="signupForm.nameLast"
                type="text"
                required
                placeholder="Last Name"
              ></b-form-input>
            </b-form-group>

            <!-- GUEST FORM INPUT -->
            <b-form-group label-for="guest">
              <b-form-input
                id="guest"
                v-model="signupForm.guest"
                type="text"
                placeholder="Guest"
              ></b-form-input>
              <b-form-input
                id="guestLast"
                v-model="signupForm.guestLast"
                type="text"
                placeholder="Guest Last Name"
              ></b-form-input>
            </b-form-group>

            <b-form-group label-for="email">
              <b-form-input
                id="email"
                v-model="signupForm.email"
                type="text"
                required
                placeholder="Username"
              ></b-form-input>
            </b-form-group>

            <b-form-group label-for="password">
              <b-form-input
                id="password"
                v-model="signupForm.password"
                type="password"
                required
                placeholder="Password"
              ></b-form-input>
            </b-form-group>

            <!-- <b-form-checkbox
              id="checkbox-guest"
              v-model="signupForm.noGuest"
              name="checkbox-guest"
              value="true"
              unchecked-value="false"
            >
              No +One
            </b-form-checkbox> -->

            <p v-if="errorMsg !== ''" class="error">{{ errorMsg }}</p>
            <button @click="signup()" class="router-btn">Sign Up</button>
            <div class="extras">
              <a type="button" class="btn" @click="toggleForm()">
                Back to Log In
              </a>
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import PageHeader from '../components/PageHeader';

  export default {
    name: 'Login',
    components: { PageHeader },
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
