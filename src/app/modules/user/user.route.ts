import { Router } from 'express'
import { validateZod } from '../../middlewares'
import { UserController as controller } from './user.controller'
import { UserZod as zod } from './user.zod'

const router = Router()

router.post('/register', validateZod(zod.register), controller.register)
router.post('/login', validateZod(zod.login), controller.login)
router.get('/', controller.getAllData)

export const UserRoute = router
