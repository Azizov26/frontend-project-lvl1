#!/usr/bin/env node

import userName from '../src/games/cli';

const gameUsers = () => {
  console.log('Welcome to the Brain Games!');
  userName();
};

gameUsers();
