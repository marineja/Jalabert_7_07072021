

const express = require("express");
const router = express.Router();
const postsCtrl = require('../controllers/posts');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, postsCtrl.createPosts); // penser a le rajouter auth
router.get('/:id', auth, postsCtrl.getOnPosts);

router.delete('/:id', postsCtrl.deletePosts);
router.get('/', postsCtrl.getAllPosts);

module.exports = router;