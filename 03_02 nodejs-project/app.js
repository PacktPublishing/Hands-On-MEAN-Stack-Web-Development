const fs = require('fs');

const colors = fs.readFileSync('colors.txt', 'UTF-8');
console.log(colors)