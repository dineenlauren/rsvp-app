<template>
  <div id="signup">
    <!-- OPTION 1 - FORM GROUPING -->
    <!-- <h1>Sign Up</h1>
    <b-form @submit.prevent>
      <b-form-group label-for="name">
        <b-form-input
          id="name"
          v-model="name"
          type="text"
          required
          placeholder="Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label-for="nameLast">
        <b-form-input
          id="nameLast"
          v-model="nameLast"
          type="text"
          required
          placeholder="Last Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label-for="guest">
        <b-form-input
          id="guest"
          v-model="guest"
          type="text"
          placeholder="Guest"
        ></b-form-input>
      </b-form-group>

      <b-form-group label-for="guestLast">
        <b-form-input
          id="guestLast"
          v-model="guestLast"
          type="text"
          placeholder="Guest Last Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label-for="email">
        <b-form-input
          id="email"
          v-model="email"
          type="text"
          required
          placeholder="Username"
        ></b-form-input>
      </b-form-group>

      <b-form-group label-for="password">
        <b-form-input
          id="password"
          v-model="password"
          type="password"
          required
          placeholder="Password"
        ></b-form-input>
      </b-form-group>
      <b-button @click="signup()" class="button">Sign Up</b-button>
    </b-form> -->

    <!-- OPTION 3 - BASIC FORM INPUT -->
    <form @submit.prevent>
      <div>
        <label for="name"></label>
        <input v-model.trim="name" type="text" placeholder="Name" id="name" />
      </div>
      <div>
        <label for="nameLast"></label>
        <input
          v-model.trim="nameLast"
          type="text"
          placeholder="Last Name"
          id="nameLast"
        />
      </div>
      <div>
        <label for="guest"></label>
        <input
          v-model.trim="guest"
          type="text"
          placeholder="Guest Name"
          id="guest"
        />
      </div>
      <div>
        <label for="guestLast"></label>
        <input
          v-model.trim="guestLast"
          type="text"
          placeholder="Guest Last Name"
          id="guestLast"
        />
      </div>

      <div>
        <label for="email"></label>
        <input
          v-model.trim="email"
          type="text"
          placeholder="username"
          id="email"
        />
      </div>
      <div>
        <label for="password"></label>
        <input
          v-model.trim="password"
          type="password"
          placeholder="min 6 characters"
          id="password"
        />
      </div>
      <button @click="signup()" class="button">Sign Up</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'SignUp',
    data() {
      return {
        name: '',
        nameLast: '',
        guest: '',
        guestLast: '',
        email: '',
        password: '',
      };
    },
    methods: {
      signup() {
        this.$store.dispatch('signup', {
          email: this.email,
          password: this.password,
          name: this.name,
          nameLast: this.nameLast,
          guest: this.guest,
          guestLast: this.guestLast,
        });
      },
    },
  };
</script>
