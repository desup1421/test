import express from 'express'
import {  deleteContact, getContact, postContact } from '../controllers/contactController.js'

const router = express.Router()


router.get('/', getContact)
router.post('/', postContact)
router.delete('/:id', deleteContact) 



export default router