import express, { Router } from 'express'
import { getUsers } from './usersControls';
const router = express.Router()

router.get('/get-users', getUsers);

export default router;