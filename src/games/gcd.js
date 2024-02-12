import runGame from '../index.js';
import gcdAlg from './gcdAlg.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const getGameRound = () => {
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  const question = `${num1} ${num2}`;
  const correctAnswer = gcdAlg(num1, num2).toString();
  return [question, correctAnswer];
};

export default () => runGame(gameDescription, getGameRound);
