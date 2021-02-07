// config/fire-config.js
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDjYA3bSzB_g6OOnujjzwTjEmklYr2g6jY",
    authDomain: "autenticacao-fe353.firebaseapp.com",
    databaseURL: "https://autenticacao-fe353.firebaseio.com",
    projectId: "autenticacao-fe353",
    storageBucket: "autenticacao-fe353.appspot.com",
    messagingSenderId: "999667879162",
    appId: "1:999667879162:web:e1437a920627a0f61d8d43"
};

try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}
const fire = firebase;
export default fire;
