import runGame from '../index.js';

import generateArithmeticProgression from './generateProgress.js';

const gameDescription = 'What number is missing in the progression?';
const getGameRound = () => {
  const firstElement = Math.floor(Math.random() * 10) + 1;
  const difference = Math.floor(Math.random() * 10) + 1;
  const progressionLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const progression = generateArithmeticProgression(progressionLength, firstElement, difference);
  const randomIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => runGame(gameDescription, getGameRound);
