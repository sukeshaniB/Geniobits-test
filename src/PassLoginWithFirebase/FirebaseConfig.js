import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC7prSQT8YgOMF3MJEcKyf_qAeG49Z0xgc",
    authDomain: "emailpasswordlogin-e78a7.firebaseapp.com",
    projectId: "emailpasswordlogin-e78a7",
    storageBucket: "emailpasswordlogin-e78a7.appspot.com",
    messagingSenderId: "952329093556",
    appId: "1:952329093556:web:144947d1de8def631832e1"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)