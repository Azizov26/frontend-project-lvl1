#!/usr/bin/env node

import userName from '../src/cli.js';
import numberAnswer from './brain-even.js';

const gameUsers = () => {
  console.log('Welcome to the Brain Games!');
  userName();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  numberAnswer();
};

gameUsers();
