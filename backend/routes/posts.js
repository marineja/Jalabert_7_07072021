const express = require('express');

const router = express.Router();

const postsCtrl = require('../controllers/posts');
const auth = require('../middleware/auth');

router.post('/', auth, postsCtrl.createPosts);
router.get('/:id', auth, postsCtrl.getOnPosts);
router.put('/:id', auth, postsCtrl.modifyPosts);
router.delete('/:id', auth, postsCtrl.deletePosts);
router.get('/', auth, postsCtrl.getAllPosts);

module.exports = router;