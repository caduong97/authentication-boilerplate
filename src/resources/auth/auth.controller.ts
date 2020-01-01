// import passport from 'passport'
import {RequestHandler} from 'express'
// import config from '../../config'
import { User } from '../users/user.interface'
import { createUser } from './auth.service'

export const signUpUser: RequestHandler = async (req, res) => {
  try {
    const { fname, lname, email, password, avatar} = req.body 
    const newUser: User = {
      fname,
      lname,
      email,
      password,
      avatar
    }
    const status = await createUser(newUser)
    if(status.error) {
      res.status(400).json(status.error)
    } else {
      res.status(201).json(status) 
    }
  } catch (error) {
    res.status(400).json({error})
  }
}