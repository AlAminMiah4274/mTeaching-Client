// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsFkzfyduLp3AklumPT6P_WlvSK4XVK0M",
    authDomain: "travelguru-2e5ca.firebaseapp.com",
    projectId: "travelguru-2e5ca",
    storageBucket: "travelguru-2e5ca.appspot.com",
    messagingSenderId: "115354547918",
    appId: "1:115354547918:web:f87b46cf7cece05c6d029f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;