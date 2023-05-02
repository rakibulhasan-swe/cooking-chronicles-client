// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCahh-Pcj9nQSHkB2jBiFDqkdGLdDBm840",
  authDomain: "cooking-chronicles.firebaseapp.com",
  projectId: "cooking-chronicles",
  storageBucket: "cooking-chronicles.appspot.com",
  messagingSenderId: "1039128770921",
  appId: "1:1039128770921:web:c808d63868ac173b2865f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;