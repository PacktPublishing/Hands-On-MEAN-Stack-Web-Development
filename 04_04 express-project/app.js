const express = require('express');
const app = express();

app.use(express.json())

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
app.get('/users', function(req, res) {
  res.send(users)
})
app.get('/users/:id', function(req, res) {
  const user = users.find(user => user.id == parseInt(req.params.id))
  res.send(user)
})
app.post('/users', function(req, res) {
  const user = {
    id: users.length+1,
    name: req.body.name
  }
  users.push(user);
  res.send(user);
})

app.listen(3000, function() {
  console.log("listening on port 3000...")
})