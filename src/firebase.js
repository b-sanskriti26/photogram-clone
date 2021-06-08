import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBs8OFaQC5RM46U3J6w_ImX7HkYUnDVhjU',
  authDomain: 'photogram-clone-6a940.firebaseapp.com',
  projectId: 'photogram-clone-6a940',
  storageBucket: 'photogram-clone-6a940.appspot.com',
  messagingSenderId: '1030931120588',
  appId: '1:1030931120588:web:56f2c5a6c1e596de451d69',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase, db, auth, storage};
