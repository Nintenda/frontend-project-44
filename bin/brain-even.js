#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const isEven = (num) => num % 2 === 0;
for (let i = 0; i < 3; i += 1) {
  const number = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if ((isEven(number) && answer === 'yes') || (!isEven(number) && answer === 'no')) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was 'no'`);
    console.log(`Let's try again, ${name}!`);
    process.exit();
  }
}
console.log(`Congratulations, ${name}!`);
