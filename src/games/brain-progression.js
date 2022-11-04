import getGames from '../index.js';
import getRandom from '../randomizer.js';

const gameRules = 'What number is missing in the progression?';

const generationNumbers = (num, step, lengthArray) => {
  const arrayNumbers = [];

  for (let i = 0; i < lengthArray; i += 1) {
    const result = num + step * i;
    arrayNumbers.push(result);
  }

  return arrayNumbers;
};
const progressionGame = () => {
  const numberItem = getRandom(1, 10);
  const step = getRandom(1, 10);
  const arrayLength = getRandom(5, 10);

  const progression = generationNumbers(numberItem, step, arrayLength);
  const randomIndex = Math.floor(Math.random() * progression.length);

  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const game = () => getGames(gameRules, progressionGame);
export default game;
