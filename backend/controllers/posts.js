//const Posts = require('../models/posts');
const fs = require('fs');
const db = require('../models');

exports.createPosts = async (req, res, next) => {
  const user = await db.users.findOne({ where: { id : req.query.userid }}); // ecrit coté posman
  console.log('useriD', user.id)
    // recuperer le user avec findone
    const posts = await db.posts.create({
      title: req.query.title,
      message: req.query.message,
      //photo: req.query.photo,
      date: req.query.date,
       // par l'objet user recupéré plus haut
      userId: user.id 
    })

   .then(
      () => {
        res.status(201).json({
          message: 'Post sauvé!'
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

/*exports.createPosts = (req, res, next) => {
  const postsObject = JSON.parse(req.body.thing);
  delete postsObject._id;
  const posts = new Posts({
    ...postsObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  posts.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
}; */

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

 /* exports.modifyPosts = (req, res, next) => {
    const postsObject = req.file ?
      {
        ...JSON.parse(req.query.posts),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      } : { ...req.body };
    Posts.updateOne({ _id: req.params.id }, { ...postsObject, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };*/

 /* exports.modifyPosts = async (req, res, next) => {
    //faire requete findone pour recuperer l'ancien post
    const postsancien = await db.posts.findOne({ where: { id : req.query.userid }});
    console.log('useriD', user.id)
    const posts = await db.posts.update({
          title: req.query.title,
          message: req.query.message,
          //photo: req.query.photo,
          date: req.query.date,
          userId: user.id
    })
    .then(
      () => {
        res.status(201).json({
          message: 'Post modifié!'
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

  exports.deletePosts = (req, res, next) => {
    console.log(req.params.id)
    db.posts.findOne({
      where: { id: req.params.id }
  })
      .then(posts => {
        //const filename = posts.imageUrl.split('/images/')[1];
        //fs.unlink(`images/${filename}`, () => {
          console.log(posts);
          db.posts.destroy({
            where: { id: req.params.id }
        })
            .then(() => res.status(200).json({ message: 'commentaire supprimé !'}))
            .catch(error => res.status(400).json({ error }));
        });
     // })
      //.catch(error => res.status(500).json({ error }));
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