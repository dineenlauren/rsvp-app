import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDRYnhQm912AQrHlPiFqiuxLpFJJKTuSf4',
  authDomain: 'rsvp-project-3f62e.firebaseapp.com',
  databaseURL: 'https://rsvp-project-3f62e.firebaseio.com',
  projectId: 'rsvp-project-3f62e',
  storageBucket: 'rsvp-project-3f62e.appspot.com',
  messagingSenderId: '1098968246901',
  appId: '1:1098968246901:web:15af436c04850cbfe7a63c',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const usersCollection = db.collection('users');

export { db, auth, usersCollection };
