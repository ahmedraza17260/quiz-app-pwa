const quizCache = 'Quiz-Cache';
const assets = [
    // 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple',
    // 'https://opentdb.com/api.php?amount=10&difficulty=easy',
    'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple',

    "/static/js / bundle.js",
    "/static/js/1.chunk.js",
    "/static/js/main.chunk.js",
    "/logo192.png",
    "/manifest.json",
    "/firebase-messaging-sw.js",
    "/src/API.ts",
    "/index.html",
    "/"
    // `https://opentdb.com/api.php?amount=${newQuestions.amount}&difficulty=${newQuestions.difficulty}&type=multiple`
];

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(quizCache).then((cache) => {
            cache.addAll(assets);
        })
    )
})


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