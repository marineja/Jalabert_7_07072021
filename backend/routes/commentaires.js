const express = require("express");
const router = express.Router();
const commentairesCtrl = require('../controllers/comments');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', multer, commentairesCtrl.createcommentaire); // penser a le rajouter auth
router.delete('/:id', commentairesCtrl.deletecommentaire);



//router.get('/', commentairesCtrl.getAllcommentaire); 

module.exports = router;