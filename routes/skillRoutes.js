import express from 'express'
import { deleteSkill, getSkill, postSkill, updateSkill } from '../controllers/skillController.js'
import { uploadSingle } from '../middleware/uploadImageMiddleware.js'

const router = express.Router()

router.get('/', getSkill)
router.post('/', uploadSingle, postSkill)
router.put('/:id', uploadSingle, updateSkill)
router.delete('/:id', deleteSkill)

export default router