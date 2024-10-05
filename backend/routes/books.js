import express from 'express';
const router = express.Router();
import * as booksControllers from '../controllers/books.js'


router.route('/')
    .get(booksControllers.index)
    .post(booksControllers.postBook)

router.route('/:id')
    .get(booksControllers.showBook)
    .put(booksControllers.editBook)
    .delete(booksControllers.deleteBook)


export default router;