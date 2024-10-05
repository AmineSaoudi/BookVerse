const express = require('express');
const router = express.Router();
const booksControllers = require('../controllers/books')


router.route('/')
    .get(booksControllers.index)
    .post(booksControllers.postBook)

router.route('/:id')
    .get(booksControllers.showBook)
    .put(booksControllers.editBook)
    .delete(booksControllers.deleteBook)


module.exports = router;