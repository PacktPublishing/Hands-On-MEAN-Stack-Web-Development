const fs = require('fs');
const calc = require('./calc')
const _ = require('lodash')

console.log('first')
const colors = fs.readFile('colors.txt', 'UTF-8', function(err, data) {
  console.log("second")
})
console.log("third")