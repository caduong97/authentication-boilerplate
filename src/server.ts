require('dotenv').config()
import express from 'express'
import {urlencoded} from 'body-parser'
import userRouter from './resources/users/user.router'

export const app = express()

app.use(urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.status(200).json({message: "Success"}) 
  
})

app.use('/users', userRouter) 