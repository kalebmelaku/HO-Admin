// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyDGBCzEzQQb56s995HGhCruOv8wBiC3vV4",
    authDomain: "health-office.firebaseapp.com",
    projectId: "health-office",
    storageBucket: "health-office.appspot.com",
    messagingSenderId: "724098428305",
    appId: "1:724098428305:web:97bde2c3721a532bf8be30",
    measurementId: "G-4R6ZBS7ZZX"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);