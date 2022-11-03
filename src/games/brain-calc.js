import getGames from '../index.js';
import getRandom from '../randomizer.js';

const gameRules = 'What is the result of the expression?';

const mathematicalSymbols = ['+', '-', '*'];

const mathematicalSolution = (numberOne, operator, numberTwo) => {
  switch (operator) {
    case '+':
      return numberOne + numberTwo;

    case '-':
      return numberOne - numberTwo;

    case '*':
      return numberOne * numberTwo;

    default:
      return null;
  }
};

const getCanculatorLogic = () => {
  const numberOne = getRandom(1, 20);
  const numberTwo = getRandom(1, 20);
  const RandomOperator = mathematicalSymbols[getRandom(0, mathematicalSymbols.length - 1)];
  const question = `${numberOne} ${RandomOperator} ${numberTwo}`;
  const correctAnswer = `${mathematicalSolution(numberOne, RandomOperator, numberTwo)}`;

  return [question, correctAnswer];
};
const brainCalcGame = getGames(gameRules, getCanculatorLogic);
export default brainCalcGame;
