importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCehShC7k5EUsNKQI2hyDDEqT7bMM0OwJ0",
    authDomain: "react-quiz-pwa.firebaseapp.com",
    databaseURL: "https://react-quiz-pwa.firebaseio.com",
    projectId: "react-quiz-pwa",
    storageBucket: "react-quiz-pwa.appspot.com",
    messagingSenderId: "822075472878",
    appId: "1:822075472878:web:e5029b3b315dc19eb5ecff",
    measurementId: "G-ZLC44QLC9Y"
)};

const messaging = firebase.messaging();
