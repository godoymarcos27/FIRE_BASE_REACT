// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8NuBs_wp-PEN9wqElzexesdEiIinwW1Q",
  authDomain: "t2-s2-crud-react.firebaseapp.com",
  projectId: "t2-s2-crud-react",
  storageBucket: "t2-s2-crud-react.appspot.com",
  messagingSenderId: "228021250470",
  appId: "1:228021250470:web:b13d9a7257ecbbc1db0767"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app)
export {db}