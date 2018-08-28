const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Post = require('./models/post');

router.get('/posts', (req, res) => {
  Post.find().then(rec => {
    if(rec) {
      res.send(rec);
    } else {
      res.send([]); 
    }
  })
});
router.post('/posts', function(req, res) {
  const post = new Post({
    _id: mongoose.Types.ObjectId(),
    title: req.body.title,
    url: req.body.url
  })
  post.save(function(err, rec) {
    if(err) {
      return res.status(400).send("error while creting a post")
    }
    res.send(rec);
  })
});
router.put('/posts/:id/upvote', function(req, res) {
  Post.findById(req.params.id, function(err, rec) {
    if(err) {
      return res.status(400).send("cannot find the post with given id")
    }
    if(!rec) {
      return res.status(404).send("Post not found")
    }
    rec.votes = rec.votes + 1;
    rec.save();
    res.send(rec);
  })
})
router.put('/posts/:id/downvote', function(req, res) {
  Post.findById(req.params.id, function(err, rec) {
    if(err) {
      return res.status(400).send("cannot find the post with given id")
    }
    if(!rec) {
      return res.status(404).send("Post not found")
    }
    rec.votes = rec.votes - 1;
    rec.save();
    res.send(rec);
  })
})
router.delete('/posts/:id', function(req, res) {
  Post.deleteOne({_id: req.params.id}, function(err, rec) {
    if(err) {
      return res.status(400).send("error while delting a user")
    }
    if(!rec) {
      return res.status(404).send("user not found")
    }
    res.send(rec);
  })
})

module.exports = router;
