import express from 'express'
import { userDetails ,getData } from '../controller/controller.js'
const router = express.Router()


router.post('/userDetails',userDetails)
router.get('/getData',getData)

export default router
