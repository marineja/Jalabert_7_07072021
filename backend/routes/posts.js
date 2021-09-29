

const express = require("express");
const router = express.Router();
const postsCtrl = require('../controllers/posts');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', multer, postsCtrl.createPosts); // penser a le rajouter auth
router.get('/:id', postsCtrl.getOnPosts);

router.delete('/:id', postsCtrl.deletePosts);
router.get('/', postsCtrl.getAllPosts);

module.exports = router;