import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD1Tyn-ekbb00GPVaECVob42uW8F8xWXqE",
  authDomain: "native-pet.firebaseapp.com",
  projectId: "native-pet",
  storageBucket: "native-pet.appspot.com",
  messagingSenderId: "1088976636881",
  appId: "1:1088976636881:web:ceea2eeed78f72ad7a2ef0",
  measurementId: "G-LXY1Q7W356"
};

export default firebase.initializeApp(firebaseConfig)
