importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');


firebase.initializeApp{
    (
        apiKey: "AIzaSyCehShC7k5EUsNKQI2hyDDEqT7bMM0OwJ0",
        authDomain: "react-quiz-pwa.firebaseapp.com",
        databaseURL: "https://react-quiz-pwa.firebaseio.com",
        projectId: "react-quiz-pwa",
        storageBucket: "react-quiz-pwa.appspot.com",
        messagingSenderId: "822075472878",
        appId: "1:822075472878:web:e5029b3b315dc19eb5ecff",
        measurementId: "G-ZLC44QLC9Y"
    )
};

const messaging = firebase.messaging();








// const quizCache = 'Quiz-Cache';
// const assets = [
//     // 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple',
//     'https://opentdb.com/api.php?amount=10&difficulty=easy',
//     "/static/js / bundle.js",
//     "/static/js/1.chunk.js",
//     "/static/js/main.chunk.js",
//     "/logo192.png",
//     "/manifest.json",
//     "/firebase-messaging-sw.js",
//     "/src/API.ts",
//     "/index.html",
//     "/"
//     // `https://opentdb.com/api.php?amount=${newQuestions.amount}&difficulty=${newQuestions.difficulty}&type=multiple`
// ];

// this.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(quizCache).then((cache) => {
//             cache.addAll(assets);
//         })
//     )
// })
