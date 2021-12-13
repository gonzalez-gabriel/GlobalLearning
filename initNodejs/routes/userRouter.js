const express = require('express');
const usersController = require('../controllers/userController')


const routes = (User) => {
    const bookRouter = express.Router();

    const { getUsers, postUsers, getUserById, putUsers, deleteUsers } = usersController(User);

    bookRouter.route('/users')
        .get(getUsers)
        .post(postUsers)

    bookRouter
        .route('/users/:userId')
        .get(getUserById)
        .put(putUsers)
        .delete(deleteUsers)
    return bookRouter;
}
module.exports = routes;
