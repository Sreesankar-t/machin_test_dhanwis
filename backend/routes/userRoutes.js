import express from 'express'
import { userDetails } from '../controller/controller.js'
const router = express.Router()


router.post('/userDetail',userDetails)

export default router
