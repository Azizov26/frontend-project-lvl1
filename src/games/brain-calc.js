import readlineSync from 'readline-sync';

const calcUsers = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('What is the result of the expression?');

  const numberOne = Math.floor(Math.random() * 20);
  const numberTwo = Math.floor(Math.random() * 20);

  console.log(`Question: ${numberOne} + ${numberTwo}`);
  const answerUser = readlineSync.question('Your answer: ');

  const answerAdmin = numberTwo + numberOne === answerUser
    ? console.log('Correct!')
    : console.log(`${answerUser} is wrong answer ;(. Correct answer was ${numberOne + numberTwo}. Let's try again ${userName}!`);

  return answerAdmin;
};
export default calcUsers;
