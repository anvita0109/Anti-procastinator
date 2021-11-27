import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCqgaZpg2nzIUugmK2aFiO2Nezq1TFRAQ4",
  authDomain: "anti-procastinator-2235d.firebaseapp.com",
  projectId: "anti-procastinator-2235d",
  storageBucket: "anti-procastinator-2235d.appspot.com",
  messagingSenderId: "477442971243",
  appId: "1:477442971243:web:cdf0d6095dfcf434d2032e"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);
 export default firebase.firestore();