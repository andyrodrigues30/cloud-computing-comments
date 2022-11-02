const express = require('express')

const commentCtrl = require('../controllers/comment-ctrl')

const router = express.Router()

router.post('/comment', commentCtrl.createcomment)
router.put('/comment/:id', commentCtrl.updatecomment)
router.delete('/comment/:id', commentCtrl.deletecomment)
router.get('/comment/:id', commentCtrl.getcommentById)
router.get('/comments', commentCtrl.getcomments)

module.exports = router