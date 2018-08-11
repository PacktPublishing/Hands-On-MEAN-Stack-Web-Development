const express = require('express');
const app = express();

const users = [{
  id: 1,
  name: 'John Doe'
}, {
  id: 2,
  name: 'Jane Doe'
}]

app.get('/', function(req, res) {
  res.send('Hello World')
})

app.get('/users/:id', function(req, res) {
  const user = users.find(user => user.id == parseInt(req.params.id))
  res.send(user)
})

app.listen(3000, function() {
  console.log("listening on port 3000...")
})