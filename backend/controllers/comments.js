
const fs = require('fs');
const db = require('../models');

exports.createcommentaire = async (req, res, next) => {
  const user = await db.users.findOne({ where: { id : req.query.userid }}); // ecrit coté posman
  const post = await db.posts.findOne({where: { id : req.query.postid}})
  console.log('useriD', user.id)
  console.log('postid', post.id)
  console.log(req.query)
    // recuperer le user avec findone
    const commentaires = await db.commentaires.create({
      
      postId: post.id,
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

exports.deletecommentaire = (req, res, next) => {
  console.log(req.params.id)
  db.commentaires.findOne({
    where: { id: req.params.id }
})
    .then(commentaires => {
        console.log(commentaires);
        db.commentaires.destroy({
          where: { id: req.params.id }
      })
          .then(() => res.status(200).json({ message: 'commentaire supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
 };