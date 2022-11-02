import readlineSync from 'readline-sync';

const numberAnswer = () => {
  const random = Math.floor(Math.random() * 100);
  console.log(`Question: ${random}`);
  const answerUser = readlineSync.question('Your answer:');
  console.log(`${answerUser}`);
  if (random % 2 === 0 && answerUser === 'yes') {
    console.log('Correct!');
  }
  if (random % 2 !== 0 && answerUser === 'no') {
    console.log('Correct!');
  }
  if (random % 2 === 0 && answerUser === 'no') {
    console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'. \'Let\'s try again, Bill!');
  }
  if (random % 2 !== 0 && answerUser === 'yes') {
    console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'. \'Let\'s try again, Bill!');
  } else {
    console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'. \'Let\'s try again, Bill!');
  }
};
export default numberAnswer;
