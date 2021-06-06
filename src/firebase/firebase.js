import firebase from 'firebase/app'
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAoVORp2ZrdOwwmpHa7DzJ7tZSKwZYO2CY",
    authDomain: "seba-app.firebaseapp.com",
    projectId: "seba-app",
    storageBucket: "seba-app.appspot.com",
    messagingSenderId: "1021181148805",
    appId: "1:1021181148805:web:6093909a7b8e421a7d33ec",
    measurementId: "G-G87ELFWJ54"
  });

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}

export function getFirebs() {
    return firebase
}