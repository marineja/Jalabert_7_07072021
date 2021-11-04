
const fs = require('fs');
const db = require('../models');

exports.createcommentaire = async (req, res, next) => {
  const User = await db.User.findOne({ where: { id : req.query.userid }}); // ecrit coté posman
  const Post = await db.Post.findOne({where: { id : req.query.postid}})
  console.log('useriD', User.id)
  console.log('postid', Post.id) 
  console.log(req.query)
    // recuperer le user avec findone
    const Commentaire = await db.Commentaire.create({ // on crée table et premiere valeur c'est le nom du champs coté base de donnée et à droite c'est une variable de se qu'on veux rjouter dans le tableau
      
      postId: Post.id, //recupéré plus haut
      message: req.query.message,
      //photo: req.query.photo,
      //date: req.query.date,
       // par l'objet user recupéré plus haut
      
      userId: User.id

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
  db.Commentaire.findOne({
    where: { id: req.params.id }
})
    .then(Commentaire => {
        console.log(Commentaire);
        db.Commentaire.destroy({
          where: { id: req.params.id }
      })
          .then(() => res.status(200).json({ message: 'commentaire supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
 };

 // fonction getallcommentaire à faire 

 exports.getAllcommentaire = (req, res, next) => {
  db.Commentaire.findAll().then(
    (Post) => {
      res.status(200).json(Post);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};