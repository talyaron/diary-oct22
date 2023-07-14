import express, { Router } from 'express'
import { addUser, getUsers, searchUserById, deleteUser } from './usersControls';

const router = express.Router()

router
    .get('/get-users', getUsers)
    .get('/search-users-by-id', searchUserById)
    .post('/add-user', addUser)
    .delete("/delete-user", deleteUser)

export default router;