import React, { useState } from 'react';
// import { Create } from 'react-admin';

import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
// types
import { QuestionsState, Difficulty } from './API';
// Styles
import { GlobalStyle, Wrapper } from './App.styles';

import './App.css';

import axios from 'axios';
import firebase from 'firebase';
import { permissionToReceiveNotifications } from './pushNotification';


export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      // Save the answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  setTimeout(sendNotification, 5000);

  async function sendNotification() {
    const messaging = firebase.messaging();
    const token = await messaging.getToken();
    // console.log('TOKEN in Component: ', token);
    const response = await axios.post(
      'https://fcm.googleapis.com/fcm/send',
      {
        notification: {
          title: "React Quiz PWA By Ahmed Raza",
          body: "",
          click_action: "",
          icon: '',
        },
        "to": token
      },
      { headers: { 'Content-Type': 'application/json', 'Authorization': 'key=AAAAv2eEO-4:APA91bGV8WoDCudzcUN3HXo2vSxcGj4IVFFVdtSh4SjQlN0_fK-bSZSPvn-EChFZeVWcw4LbzPpqB9sQcpjJcoNBYnVVWCwonteVGYbeZgNnmmpvUud3jk0YBiz5wHX6lt8PaLeJVm2p' } }
    );
    console.log('Response: ', response);
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>REACT QUIZ</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className='start' onClick={startTrivia}>
            Start
          </button>
        ) : null}
        {!gameOver ? <p className='score'>Score: {score}</p> : null}
        {loading ? <p>Loading Questions...</p> : null}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button className='next' onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
      <button className="btn" onClick={permissionToReceiveNotifications} >
        Allow Notifications ?
      </button>
      <div className="copyRight">
        <h4> Powered by Ahmed Raza </h4>
        <a href="https://github.com/ahmedraza17260" rel="noopener noreferrer" target="_blank">
          {" "}
          <h3> Copyright &copy; 2020 Ahmed Raza </h3>{" "}
        </a>
        <h3> All Right Reserved </h3>
      </div>
    </>
  );
};

export default App;
