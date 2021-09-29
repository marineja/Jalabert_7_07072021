// importation d'express

const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');


const postsRoutes = require('./routes/posts');
const usersRoutes = require('./routes/users');
const commentsRoutes = require('./routes/commentaires');



 //pour avoir acces au chemin du systeme de ficher (pour les images)
const path = require('path'); 





// creation d'application express
const app = express();

//connexion à mySQL

var mysql = require('mysql');
var pool  = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: 'groupomania'
});



// CORS configuration de l'adresse
/*app.use(cors({
  origin: 'http://localhost:4200'
})); */
//configuration des entêtes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/api/posts', postsRoutes);
app.use('/api/auth', usersRoutes);
app.use('/api/comments', commentsRoutes),

//gestion des routes principales
 app.use('/images', express.static(path.join(__dirname, 'images')));


// exportation de l'application
module.exports = app;