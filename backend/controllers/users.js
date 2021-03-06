const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');

exports.signup = async (req, res, next) => {
 
    const user =  await db.User.create({
        email: req.query.email,
        password: await bcrypt.hash(req.query.password, 10),
        username: req.query.username,
        isAdmin: false

      })
   
      .then(() => res.status(201).json({message: 'Utilisateur créé'}))
      .catch(error => res.status(400).json({ error }));
 
  
};
    //bcrypt.hash(req.query.password, 10)
     /* .then(hash => {
        const user = new Users({
          email: req.query.email,
          password: hash,
          username: req.query.username,
          isAdmin: false
        });
        console.log(user);
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      }) 
      .catch(error => res.status(500).json({ error })); */
  

  exports.login = (req, res, next) => {
    db.User.findOne({where:{ email: req.query.email }})
      .then(User => {
        if (!User) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        console.log(User.password);
        console.log(req.query.password);
        bcrypt.compare(req.query.password, User.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userid: User._id,
              token: jwt.sign(
                { userid: User._id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json("pemiere ereur"));
      })
      .catch(error => res.status(500).json( "deuxieme catch" ));
  };

  //supression user (delete)------------------------------------------------------------------

  exports.deleteUser = (req, res, next) => {
    console.log(req.params.id)
    db.User.findOne({
      where: { id: req.params.id }
  })
      .then(User => {
        
          console.log(User);
          db.User.destroy({
            where: { id: req.params.id }
        })
            .then(() => res.status(200).json({ message: 'user supprimé !'}))
            .catch(error => res.status(400).json({ error }));
        }); 
 };