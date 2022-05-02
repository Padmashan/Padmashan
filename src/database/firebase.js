import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDVr3WxVeRXRqt3Dj625YhvK84m2P2JxJM",
  authDomain: "cage-96ab8.firebaseapp.com",
  databaseURL: "https://cage-96ab8-default-rtdb.firebaseio.com",
  projectId: "cage-96ab8",
  storageBucket: "cage-96ab8.appspot.com",
  messagingSenderId: "829724810146",
  appId: "1:829724810146:web:b1b283698dfa3ae05a30fb",
  measurementId: "G-75T5REWW1M"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase;