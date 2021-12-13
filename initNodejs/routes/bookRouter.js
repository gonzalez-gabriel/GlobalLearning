const express = require('express');
const booksController = require('../controllers/bookController')


const routes = (Book) => {
    const bookRouter = express.Router();

    const { getBooks, postBooks, getBookById, putBooks, deleteBooks } = booksController(Book);

    bookRouter.route('/books')
        .get(getBooks)
        .post(postBooks)

    bookRouter
        .route('/books/:bookId')
        .get(getBookById)
        .put(putBooks)
        .delete(deleteBooks)
    return bookRouter;
}
module.exports = routes;

//son rutas, ednpoint exponer hacia afuera metodos internos d nuestro servidor y entramos con ('/books/:bookId') esa ruta
//endpoint punto final para hacer lo q quiero hacer
//el afuera es nuestra máquina