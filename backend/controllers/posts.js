const Posts = require('../models/posts');
const fs = require('fs');

/*exports.createPosts = (req, res, next) => {
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
}; */

exports.createPosts = (req, res, next) => {
  const postsObject = JSON.parse(req.body.thing);
  delete postsObject._id;
  const posts = new Posts({
    ...postsObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  posts.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

/*exports.modifyPosts = (req, res, next) => {
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
  }; */

  exports.modifyPosts = (req, res, next) => {
    const postsObject = req.file ?
      {
        ...JSON.parse(req.body.posts),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      } : { ...req.body };
    Posts.updateOne({ _id: req.params.id }, { ...postsObject, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.deletePosts = (req, res, next) => {
    Posts.findOne({ _id: req.params.id })
      .then(posts => {
        const filename = posts.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Posts.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
            .catch(error => res.status(400).json({ error }));
        });
      })
      .catch(error => res.status(500).json({ error }));
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