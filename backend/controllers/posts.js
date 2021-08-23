const Posts = require('../models/posts');

exports.createPosts = (req, res, next) => {
    // recuperer le user avec findone
    const posts = new Posts({
      title: req.body.title,
      message: req.body.message,
      //photo: req.body.photo,
      date: req.body.date,
      userid: req.body.userid // par l'objet user recupéré plus haut
     
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
};

exports.modifyPosts = (req, res, next) => {
  //faire requete findone pour recuperer l'ancien post
    const posts = new Posts({
        title: req.body.title,
        message: req.body.message,
        //photo: req.body.photo,
        date: req.body.date,
        userid: req.body.userid
        
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
  };

exports.deletePosts = (req, res, next) => {
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
  };

exports.getOnPosts = (req, res, next) => {
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
  };

  exports.getAllPosts = (req, res, next) => {
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
  };