import { shuffleArray } from './utils';

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
};

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export type QuestionsState = Question & { answers: string[] };

async function getCachedData(cacheName: string, url: string) {
    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);

    if (!cachedResponse || !cachedResponse.ok) {
        return false;
    }

    return await cachedResponse.json();
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState[]> => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    const res = await fetch(url).then(data => {
        return data.json();
    }).catch(function (error) {
        console.log('Problem with fetch (Internet offline ?): ',
            error.message);
        return getCachedData('Quiz-Cache', url);
    });

    //eslint-disable-next-line  
    var { results } = res;

    return res.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
}




// export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState[]> => {
//     const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
//     // const endpoint = `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`;
//     const data = await (await fetch(endpoint)).json();
//     return data.results.map((question: Question) => ({
//         ...question,
//         answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
//     }))
// };
