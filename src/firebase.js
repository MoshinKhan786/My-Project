import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyChABzIkLPZXEGMn6xuBStUJQm8F8Begkc",
    authDomain: "otp-apps-demo-ec41e.firebaseapp.com",
    projectId: "otp-apps-demo-ec41e",
    storageBucket: "otp-apps-demo-ec41e.appspot.com",
    messagingSenderId: "928420029933",
    appId: "1:928420029933:web:2761298c934f3e363eb3e4"
  }

  // Initialize Firebase
  firebase.initializeApp(config);
export default firebase