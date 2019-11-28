import { Router } from 'express'
import {createUser} from './user.controller'
// import express from 'express'

const userRouter = Router()

const validator = (req, res, next) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if(emailRegex.test(req.body.email) ) {
    next()
  } else {
    res.status(400).json({error: 'email invalid'})
  }
}

userRouter.route('/').post(validator,createUser)

// const userRouter = express()
// userRouter.post('/', createUser)


export default userRouter