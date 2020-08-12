import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBn7YpzrF3LegnV27ooBsn9cu1kISCBwz4",
    authDomain: "snapgram-b54bd.firebaseapp.com",
    databaseURL: "https://snapgram-b54bd.firebaseio.com",
    projectId: "snapgram-b54bd",
    storageBucket: "snapgram-b54bd.appspot.com",
    messagingSenderId: "801933199517",
    appId: "1:801933199517:web:8be56ec32c2ace4e272c74",
    measurementId: "G-8YKBWWF9WY"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}