const quizCache = 'Quiz-Cache';
const assets = [
    'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(quizCache).then((cache) => {
            cache.addAll(assets);
        })
    )
})