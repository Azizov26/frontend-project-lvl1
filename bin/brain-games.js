#!/usr/bin/env node

import userName from '../src/cli.js';

const gameUsers = () => {
  console.log('Welcome to the Brain Games!');
  userName();
};

gameUsers();
