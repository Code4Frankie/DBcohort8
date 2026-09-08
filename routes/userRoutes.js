const express = require('express');
const userRoute = express.Router();

const { createUser, deleteUser, getAllUsers, getSingleUser, updateUser } = require('../controller/userController');

userRoute.post('/users', createUser);
userRoute.get('/users', getAllUsers);
userRoute.get('/users/:id', getSingleUser);
userRoute.patch('/users/:id', updateUser);
userRoute.delete('/users/:id', deleteUser);

module.exports = userRoute;