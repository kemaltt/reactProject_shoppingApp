// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgls3Jr5K492Ji78SDCSpPeIFS3nRAWzQ",
    authDomain: "new-project-1518d.firebaseapp.com",
    projectId: "new-project-1518d",
    storageBucket: "new-project-1518d.appspot.com",
    messagingSenderId: "14498341707",
    appId: "1:14498341707:web:3e0840fa2bdd9fb329fece",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);