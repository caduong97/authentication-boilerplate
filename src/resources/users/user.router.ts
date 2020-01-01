import { Router } from 'express'
import { getUsers, getUser, putUser} from './user.controller'

// import passport from 'passport'

// passport.authenticate()

const userRouter = Router()

// const validator: RequestHandler = (req, res, next) => {
//   const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   if(emailRegex.test(req.body.email) ) {
//     next()
//   } else {
//     res.status(400).json({error: 'email invalid'})
//   }
// }

// userRouter.route('/').use(validator,postUser)

userRouter.route('/').get(getUsers)

userRouter.route('/:email').get(getUser)

userRouter.route('/').put(putUser)

// const userRouter = express()
// userRouter.post('/', createUser)


export default userRouter