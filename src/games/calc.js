import runGame from '../index.js';

const calculateAnswer = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const gameDescription = 'What is the result of the expression?';

const getGameRound = () => {
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = calculateAnswer(num1, num2, operation).toString();

  return [question, correctAnswer];
};

export default () => runGame(gameDescription, getGameRound);
