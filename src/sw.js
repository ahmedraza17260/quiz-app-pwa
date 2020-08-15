const quizCache = 'Quiz-Cache';
const assets = [
    // 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple',
    // 'https://opentdb.com/api.php?amount=10&difficulty=easy',
    'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple',

    "/static/js / bundle.js",
    "/static/js/1.chunk.js",
    "/static/js/main.chunk.js",
    "/logo192.png",
    "/favicon.ico",
    "/manifest.json",
    "/firebase-messaging-sw.js",
    "/src/API.ts",
    "/index.html",
    "/"
    // `https://opentdb.com/api.php?amount=${newQuestions.amount}&difficulty=${newQuestions.difficulty}&type=multiple`
];

self.addEventListener("activate", function (e) {
    console.log("[ServiceWorker] Activate");
});

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(quizCache).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(assets);
        })
    );
});

self.addEventListener('fetch', function (e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});


// this.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(quizCache).then((cache) => {
//             cache.addAll(assets);
//         })
//     )
// })


// window.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.open('Quiz-Cache').then(function (cache) {
//             return cache.match(event.request).then(function (response) {
//                 return response || fetch(event.request).then(function (response) {
//                     cache.put(event.request, response.clone());
//                     return response;
//                 });
//             });
//         })
//     );
// });
// let cacheData = "quizApp";

// this.addEventListener("install", (event) => {
//     event.waitUntil(
//         caches.open(cacheData).then((cache)) => {
//         cache.addAll([
//             "/static/js / bundle.js",
//             "/static/js/1.chunk.js",
//             "/static/js/main.chunk.js",
//             "/logo192.png",
//             "/manifest.json",
//             "/firebase-messaging-sw.js",
//             "/src/API.ts",
//             "/index.html",
//             "/"
//         ])
//     }
//     )
// })

// this.addEventListener("fetch", (event) => {
//     event.responseWith(
//         caches.match(event.request).then(result) => {
//         if(result) {
//             return result
//         }
//     }
//     )
// })