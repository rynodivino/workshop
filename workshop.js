#!/usr/bin/env node

const Workshopper = require('workshopper')
    , path        = require('path')

Workshopper({
    name     : 'workshop'
  , title    : 'Let\'s Create a Binary Tree!'
  , appDir   : __dirname
  , helpFile : path.join(__dirname, 'help.txt')
}).init()
