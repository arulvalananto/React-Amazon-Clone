import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQd8jUjOij6YmF_dUHZsY9SjST-Baw1Zs134",
  authDomain: "mazon-clone-5dc2b.firebaseapp.com",
  databaseURL: "https://mazon-clone-5dc2b.firebaseio.com",
  projectId: "mazon-clone-5dc2b",
  storageBucket: "mazon-clone-5dc2b.appspot.com",
  messagingSenderId: "602785818879",
  appId: "1:602785818879:web:25bbaf6832611d948e84ca",
  measurementId: "G-S2JZQG1N3Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
