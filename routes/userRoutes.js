const express = require('express');
const userRoute = express.Router();

const { createUser, deleteUser, getAllUsers, getSingleUser, updateUser } = require('../controller/userController');

userRoute.post('/', createUser);
userRoute.get('/', getAllUsers);
userRoute.get('/:id', getSingleUser);
userRoute.patch('/:id', updateUser);
userRoute.delete('/:id', deleteUser);

module.exports = userRoute;