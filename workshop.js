#!/usr/bin/env node

const Workshopper = require('workshopper')
    , path        = require('path')

Workshopper({
    name     : 'workshop'
  , title    : 'Ryan\s Fun Tutorial.'
  , appDir   : __dirname
  , helpFile : path.join(__dirname, 'help.txt')
}).init()
