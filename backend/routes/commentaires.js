const express = require("express");
const router = express.Router();
const commentairesCtrl = require('../controllers/comments');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', multer, commentairesCtrl.createcommentaire); // penser a le rajouter auth
/*router.get('/:id', auth, commentairesCtrl.getOncommentaire);
router.put('/:id', auth, multer, commentairesCtrl.modifycommentaire);
router.delete('/:id', auth, commentairesCtrl.deletecommentaire);
router.get('/', auth, commentairesCtrl.getAllcommentaire); */

module.exports = router;