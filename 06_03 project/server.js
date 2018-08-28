const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

const api = require('./server/api');


app.use(express.json());
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/readingit', { useNewUrlParser: true });

app.use(express.static(path.join(__dirname, 'dist')));


app.use('/api', api);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.listen(3000, () => console.log('Listening on port 3000...'));
