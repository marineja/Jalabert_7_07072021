const express = require('express');
const posts = require('../models/posts');

const router = express.Router();

router.post('/', (req, res, next) => {
    const posts = new Posts({
      title: req.body.title,
      message: req.body.message,
      photo: req.body.photo,
      date: req.body.date,
      userid: req.body.userid,
      id: req.body.id
     
    });
    thing.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });
  
  router.get('/:id', (req, res, next) => {
    Posts.findOne({
      _id: req.params.id
    }).then(
      (posts) => {
        res.status(200).json(posts);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  });
  
  router.put('/:id', (req, res, next) => {
    const posts = new Posts({
        title: req.body.title,
        message: req.body.message,
        photo: req.body.photo,
        date: req.body.date,
        userid: req.body.userid,
        id: req.body.id
    });
    Posts.updateOne({_id: req.params.id}, posts).then(
      () => {
        res.status(201).json({
          message: 'Posts updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });
  
  router.delete('/:id', (req, res, next) => {
    Posts.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });
  
  router.get('/' +
    '', (req, res, next) => {
    Posts.find().then(
      (posts) => {
        res.status(200).json(posts);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });

module.exports = router;