import getGames from '../index.js';
import getRandom from '../randomizer.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num === 1) {
    return 'no';
  }
  if (num === 2) {
    return 'yes';
  }
  // eslint-disable-next-line no-unreachable-loop
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const primeGame = () => {
  const number = getRandom(1, 20);
  const question = `${number}`;
  const correctAnswer = `${isPrime(number)}`;
  return [question, correctAnswer];
};

const brainPrimeGame = () => getGames(gameRules, primeGame);
export default brainPrimeGame;
