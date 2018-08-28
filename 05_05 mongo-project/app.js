const express = require('express');
const app = express();
const mongoose = require('mongoose')
const User = require('./models/user')

app.use(express.json())
mongoose.connect('mongodb://localhost:27017/newtest', { useNewUrlParser: true });

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
  User.find(function(err, recs) {
    if(err) {
      return res.status(400).send("error while creting a user")
    }
    res.send(recs);
  })
})
app.get('/users/:id', function(req, res) {
  User.find({_id: req.params.id}, function(err, recs) {
    if(err) {
      return res.status(400).send("error while creting a user")
    }
    res.send(recs);
  })
})
app.post('/users', function(req, res) {
  const user = new User({
    _id: mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
  user.save(function(err, rec) {
    if(err) {
      return res.status(400).send("error while creting a user")
    }
    res.send(rec);
  })
})
app.put('/users/:id', function(req, res) {
  User.findById(req.params.id, function(err, rec) {
    if(err) {
      return res.status(400).send("error while creting a user")
    }
    if(!rec) {
      return res.status(404).send("user not found")
    }
    rec.firstName = req.body.firstName;
    rec.save();
    res.send(rec);
  })
})

app.delete('/users/:id', function(req, res) {
  const user = users.find(user => user.id == parseInt(req.params.id))
  if(!iuser) return res.status(404).send("Not found");
  const index = users.indexOf(user);
  users.splice(index, 1);
  res.send(user)
})


app.listen(3000, function() {
  console.log("listening on port 3000...")
})