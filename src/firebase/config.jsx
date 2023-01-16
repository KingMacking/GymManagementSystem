// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFRvKm0xJZoQyfUfk0k3WAaulLoqMlSx8",
    authDomain: "gym-management-system-16674.firebaseapp.com",
    projectId: "gym-management-system-16674",
    storageBucket: "gym-management-system-16674.appspot.com",
    messagingSenderId: "389628947430",
    appId: "1:389628947430:web:aae105bcdf64a1e8724427"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app

export const fireStoreInit = () => app