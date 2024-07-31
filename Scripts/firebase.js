// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import { doc, setDoc, getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDQfDykxW_l5U1-LfUPb0ZLBRrM_SQELw",
    authDomain: "sign-in-project-a8361.firebaseapp.com",
    projectId: "sign-in-project-a8361",
    storageBucket: "sign-in-project-a8361.appspot.com",
    messagingSenderId: "753976908150",
    appId: "1:753976908150:web:fdab15dba092ddfad98257"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    doc,
    setDoc,
    db
};