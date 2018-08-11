const fs = require('fs');
const calc = require('./calc')
const _ = require('lodash')

const colors = fs.readFileSync('colors.txt', 'UTF-8');
// console.log(colors)
// console.log(calc.name)
const filtered = _.filter(colors, function(data) {
  return data.indexOf('voilet')
})
