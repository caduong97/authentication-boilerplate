import {  getAllUsers, getOneUser, updateUser } from './user.service'
import { RequestHandler } from 'express-serve-static-core'

// !!! always have try catch to handler error


export const getUsers: RequestHandler = async (req, res) => {
  try {
    const allUsers = await getAllUsers()
    res.status(200).json(allUsers)
  } catch (error) {
    res.status(400).json({error})
  }
}

export const getUser: RequestHandler = async (req, res) => {
  try {
    const {email} = req.params
    const user = await getOneUser(email)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({error})
  }
}

export const putUser: RequestHandler = async (req, res) => {
  try {
    const {fname, lname, email, password, avatar} = req.body 
    const newUser = await updateUser({fname, lname, email, password, avatar})
    res.status(200).json(newUser)
  } catch (error) {
    res.status(400).json({error})
  }
}