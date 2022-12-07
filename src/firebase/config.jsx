// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCahSsKl47_7TDPCfWqO8LBHMnr0vESFrE",
    authDomain: "real-training-f9925.firebaseapp.com",
    projectId: "real-training-f9925",
    storageBucket: "real-training-f9925.appspot.com",
    messagingSenderId: "273123736723",
    appId: "1:273123736723:web:c0e5ce8e8c5d132cb36166"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app

export const fireStoreInit = () => app