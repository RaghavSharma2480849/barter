import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCwvUU5I-w-JeLv1detsaO8W_4JJoWF9o4",
  authDomain: "book-santa-2b3a6.firebaseapp.com",
  databaseURL: "https://book-santa-2b3a6.firebaseio.com",
  projectId: "book-santa-2b3a6",
  storageBucket: "book-santa-2b3a6.appspot.com",
  messagingSenderId: "809586316305",
  appId: "1:809586316305:web:453c77d6387f0d04eacdb0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export default firebase.firestore();
