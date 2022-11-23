// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDowG0KVrGMk5FJvmo-ctic9HB9VEVRu7g",
  authDomain: "todo-634eb.firebaseapp.com",
  projectId: "todo-634eb",
  storageBucket: "todo-634eb.appspot.com",
  messagingSenderId: "402243848349",
  appId: "1:402243848349:web:ad4d6863e21de9da6cac74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);