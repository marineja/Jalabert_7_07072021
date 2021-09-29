
const fs = require('fs');
const db = require('../models');

exports.createcommentaire = async (req, res, next) => {
  const user = await db.users.findOne({ where: { id : req.query.userid }}); // ecrit coté posman
  const post = await db.posts.findOne({where: { id : req.query.postid}})
  console.log('useriD', user.id)
    // recuperer le user avec findone
    const commentaires = await db.commentaires.create({
      postid: post.id,
      message: req.query.message,
      //photo: req.query.photo,
      date: req.query.date,
       // par l'objet user recupéré plus haut
      userId: user.id 

    })

   .then(
      () => {
        res.status(201).json({
          message: 'commentaire sauvé!'
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

// delete , getallcommentaire fonction à */