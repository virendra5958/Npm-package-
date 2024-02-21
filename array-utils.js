const _ = require('lodash');

const sum = arr => arr.reduce((acc, val) => acc + val, 0);

const average = arr => sum(arr) / arr.length;

const unique = arr => [...new Set(arr)];

const reverse = arr => arr.slice().reverse();

const shuffle = arr => arr.slice().sort(() => Math.random() - 0.5);

const filterFalsy = arr => arr.filter(Boolean);

const flatten = arr => arr.flat(Infinity);

const sortByLength = arr => arr.sort((a, b) => a.length - b.length);

const chunk = (arr, size) => _.chunk(arr, size);

const rotate = (arr, positions) => [...arr.slice(positions), ...arr.slice(0, positions)];

module.exports = {
  sum,
  average,
  unique,
  reverse,
  shuffle,
  filterFalsy,
  flatten,
  sortByLength,
  chunk,
  rotate
};
