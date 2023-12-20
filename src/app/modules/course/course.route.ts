import { Router } from 'express'
import { validateRole, validateZod } from '../../middlewares'
import { CourseController as controller } from './course.controller'
import { CourseZod as zod } from './course.zod'

const router = Router()

router.post('/', validateRole(['admin']), validateZod(zod.createData), controller.createData)
router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.patch('/:id', validateRole(['admin']), validateZod(zod.updateData), controller.updateData)
router.delete('/:id', validateRole(['admin']), controller.deleteData)

export const CourseRoute = router
