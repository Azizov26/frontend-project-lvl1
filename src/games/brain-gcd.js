import getGames from '../index.js';
import getRandom from '../randomizer.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const nod = (numOne, numTwo) => {
  if (numTwo !== 0) {
    const solution = numOne % numTwo;
    return nod(numTwo, solution);
  }
  return numOne;
};

const gameGCD = () => {
  const numberOne = getRandom(1, 30);
  const numberTwo = getRandom(1, 30);
  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = `${nod(numberOne, numberTwo)}`;
  return [question, correctAnswer];
};

const brainGameGCD = () => getGames(gameRules, gameGCD);

export default brainGameGCD;
