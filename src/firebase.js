// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDCSe7jfl72T5xjMFXly2j6y9B6YLjUD8",
  authDomain: "netflix-clone-b7075.firebaseapp.com",
  projectId: "netflix-clone-b7075",
  storageBucket: "netflix-clone-b7075.appspot.com",
  messagingSenderId: "696820494611",
  appId: "1:696820494611:web:c14a0da97966a1e3282ae6",
  measurementId: "G-1V4W6DB108"
};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
export {auth}
export default db;