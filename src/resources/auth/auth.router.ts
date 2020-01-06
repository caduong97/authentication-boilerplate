import { Router} from 'express'
import * as authController from './auth.controller'

const authRouter = Router()

authRouter.route('/signup').post(authController.signUpUser)

authRouter.route('/signin').post(authController.signInUser)


export default authRouter