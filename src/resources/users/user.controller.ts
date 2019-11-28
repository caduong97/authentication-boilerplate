import { createNewUser } from './user.service'
import { RequestHandler } from 'express-serve-static-core'

export const createUser: RequestHandler = async (req, res) => {
  try {
    const { fname, lname, email, password, avatar} = req.body 
    const user = await createNewUser({fname, lname, email, password, avatar})
    res.status(201).json(user) 
  } catch (error) {
    res.status(400).json({error})
  }
}