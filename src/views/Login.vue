<template>
  <div id="login">
    <!-- LOGIN FORM -->
    <div :class="{ 'signup-form': !showLoginForm }">
      <b-form v-if="showLoginForm" @submit.prevent>
        <h1>Login to RSVP</h1>
        <b-form-input
          id="email1"
          v-model.trim="loginForm.email"
          type="text"
          required
          placeholder="Username"
        ></b-form-input>
        <b-form-input
          id="password1"
          v-model.trim="loginForm.password"
          type="password"
          required
          placeholder="Password"
        ></b-form-input>
        <!-- <p v-if="errorMsg !== ''" class="error">{{ errorMsg }}</p> -->
        <b-button @click="login()" class="button">Log In</b-button>
        <div class="extras">
          <b-button @click="toggleForm()" class="button"
            >Create an Account</b-button
          >
        </div>
      </b-form>

      <!-- SIGN UP FORM -->
      <b-form v-else @submit.prevent>
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

        <b-form-group label-for="guest">
          <b-form-input
            id="guest"
            v-model="signupForm.guest"
            type="text"
            placeholder="Guest"
          ></b-form-input>
        </b-form-group>

        <b-form-group label-for="guestLast">
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
        <!-- <p v-if="errorMsg !== ''" class="error">{{ errorMsg }}</p> -->
        <b-button @click="signup()" class="button">Sign Up</b-button>
        <div class="extras">
          <b-button @click="toggleForm()" class="button"
            >Back to Log In</b-button
          >
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        loginForm: {
          email: '',
          password: '',
        },
        signupForm: {
          name: '',
          nameLast: '',
          guest: '',
          guestLast: '',
          email: '',
          password: '',
        },
        showLoginForm: true,
        // errorMsg: '',
      };
    },
    methods: {
      toggleForm() {
        this.showLoginForm = !this.showLoginForm;
      },
      login() {
        this.$store.dispatch('login', {
          email: this.loginForm.email,
          password: this.loginForm.password,
        });
        // .catch((err) => {
        //   console.warn(err);
        //   this.errorMsg = err.message;
        // });
      },
      signup() {
        this.$store.dispatch('signup', {
          name: this.signupForm.name,
          nameLast: this.signupForm.nameLast,
          guest: this.signupForm.guest,
          guestLast: this.signupForm.guestLast,
          email: this.signupForm.email,
          password: this.signupForm.password,
        });
      },
    },
  };
</script>
