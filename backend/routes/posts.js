const express = require('express');

const router = express.Router();

const postsCtrl = require('../controllers/posts');

router.post('/', postsCtrl.createPosts);
router.get('/:id', postsCtrl.getOnPosts);
router.put('/:id', postsCtrl.modifyPosts);
router.delete('/:id', postsCtrl.deletePosts);
router.get('/', postsCtrl.getAllPosts);

module.exports = router;