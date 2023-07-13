import express, { Router } from 'express'
import { addUser, getUsers, searchUserById } from './usersControls';
import { createUser, deleteUser, getUsers } from './usersControls';
const router = express.Router()

router
.get('/get-users', getUsers)
.get('/search-users-by-id', searchUserById)
.post('/add-user', addUser)

router.post('/add-user', createUser).delete("/delete-user", deleteUser)

export default router;