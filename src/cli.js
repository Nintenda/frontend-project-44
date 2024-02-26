import readlineSync from 'readline-sync';
// Wait for user's response.
export default function greetUser() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}
