import express, { Router } from 'express'
import { createUser, deleteUser, getUsers } from './usersControls';
const router = express.Router()

router.get('/get-users', getUsers);

router.post('/add-user', createUser).delete("/delete-user", deleteUser)

export default router;