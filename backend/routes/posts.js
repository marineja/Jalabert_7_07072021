const express = require('express');

const router = express.Router();

const postsCtrl = require('../controllers/posts');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', multer, postsCtrl.createPosts); // penser a le rajouter auth
router.get('/:id', auth, postsCtrl.getOnPosts);
router.put('/:id', auth, multer, postsCtrl.modifyPosts);
router.delete('/:id', auth, postsCtrl.deletePosts);
router.get('/', auth, postsCtrl.getAllPosts);

module.exports = router;