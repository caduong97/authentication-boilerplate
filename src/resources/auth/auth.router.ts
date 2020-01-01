import { Router} from 'express'
// import passport from 'passport'
import * as authController from './auth.controller'



const authRouter = Router()

authRouter.route('/signup').post(authController.signUpUser)

export default authRouter