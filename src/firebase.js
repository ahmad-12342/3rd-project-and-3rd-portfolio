// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPiBZHTo5shrdxGdBXILj0dEFwPWGwlFg",
    authDomain: "ahmad-2-c2fdb.firebaseapp.com",
    projectId: "ahmad-2-c2fdb",
    storageBucket: "ahmad-2-c2fdb.firebasestorage.app",
    messagingSenderId: "496385849018",
    appId: "1:496385849018:web:ca0d719d44702d084ab483",
    measurementId: "G-T37LEPRXFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, analytics, auth, provider };
