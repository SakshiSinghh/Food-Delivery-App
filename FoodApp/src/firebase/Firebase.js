// database/firebaseDb.js
import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBixSEaJQ2kce97NvygDbg9Yl8HzDKhKMg",
    authDomain: "foodapp-e6c8d.firebaseapp.com",
    projectId: "foodapp-e6c8d",
    storageBucket: "foodapp-e6c8d.appspot.com",
    messagingSenderId: "1011549589848",
    appId: "1:1011549589848:web:4c105f0cf8672f0448d52d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;