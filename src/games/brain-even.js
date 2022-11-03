import getGames from '../index.js';
import getRandom from '../randomizer.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const num = getRandom(1, 99);
  const question = `${num}`;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainEvenGame = getGames(gameRules, getGameData);
export default brainEvenGame;
