import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;
export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((isEven(number) && answer === 'yes') || (!isEven(number) && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'no'`);
      console.log(`Let's try again, ${name}!`);
      process.exit(); // Exit from the game (wrong answer)
    }
  }
  console.log(`Congratulations, ${name}!`);
};
