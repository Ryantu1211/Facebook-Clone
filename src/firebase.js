// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDD_DyYjx_M9z2HFASDQ60YtjyBqzGfl9U",
  authDomain: "facebook-clone-d9c65.firebaseapp.com",
  projectId: "facebook-clone-d9c65",
  storageBucket: "facebook-clone-d9c65.appspot.com",
  messagingSenderId: "250826329799",
  appId: "1:250826329799:web:6bc63cfe987f05cbfab8e2",
  measurementId: "G-5S6FRE58PV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;