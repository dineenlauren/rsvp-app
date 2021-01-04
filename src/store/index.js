import Vue from 'vue';
import Vuex from 'vuex';
import * as fb from '../firebase';
import router from '../router/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userProfile: {},
  },
  mutations: {
    setUserProfile(state, value) {
      state.userProfile = value;
    },
  },
  // LOG USER IN
  actions: {
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(
        form.email + '@wedding.com',
        form.password
      );
      // fetch user profile and set in state
      dispatch('fetchUserProfile', user);
    },

    async signup({ dispatch }, form) {
      const { user } = await fb.auth.createUserWithEmailAndPassword(
        form.email + '@wedding.com',
        form.password
      );

      await fb.usersCollection.doc(user.uid).set({
        name: form.name,
        nameLast: form.nameLast,
        guest: form.guest,
        guestLast: form.guestLast,
        status: null,
        status2: null,
        // noGuest: form.noGuest,
      });

      dispatch('fetchUserProfile', user);
    },

    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get();

      // set user profile in state
      commit('setUserProfile', userProfile.data());

      // change route to rsvp view
      if (router.currentRoute.path === '/login') {
        if (!userProfile.isAdmin) {
          router.push('/rsvp');
        } else {
          router.push('/admin');
        }
      }
    },
    // LOG USER OUT
    async logout({ commit }) {
      await fb.auth.signOut();
      commit('setUserProfile', {});
      router.push('login');
    },

    async updateProfile({ dispatch }, user) {
      const userId = fb.auth.currentUser.uid;
      // update user object
      await fb.usersCollection.doc(userId).update({
        status: user.status,
        status2: user.status2,
      });

      dispatch('fetchUserProfile', { uid: userId });
    },

    async updateGuest({ dispatch }, user) {
      const userId = fb.auth.currentUser.uid;
      // update user object
      await fb.usersCollection.doc(userId).update({
        guest: user.guest,
        guestLast: user.guestLast,
      });

      dispatch('fetchUserProfile', { uid: userId });
    },

    // end
  },
  modules: {},
});

export default store;
