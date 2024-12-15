import { initializeApp } from "firebase/app";
import {getDatabase} from "@firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDkIm101h_poHsBbIk0D2hCv08aFG0CZDo",
    authDomain: "car-thing-996d0.firebaseapp.com",
    databaseURL: "https://car-thing-996d0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "car-thing-996d0",
    storageBucket: "car-thing-996d0.firebasestorage.app",
    messagingSenderId: "663783659054",
    appId: "1:663783659054:web:a51f390e65ddb03e4bf1bf",
    measurementId: "G-FD1DR131JG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getDatabase(app)
