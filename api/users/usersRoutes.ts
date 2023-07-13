import express, { Router } from 'express'
import { addUser, getUsers, searchUserById } from './usersControls';
const router = express.Router()

router
.get('/get-users', getUsers)
.get('/search-users-by-id', searchUserById)
.post('/add-user', addUser)

export default router;