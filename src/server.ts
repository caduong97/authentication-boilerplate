require('dotenv').config() //package to access environment keys in .env
import express from 'express'
import {urlencoded} from 'body-parser'
import initPassport from './services/passport'
import userRouter from './resources/users/user.router'
import authRouter from './resources/auth/auth.router'


initPassport()

export const app = express()

app.use(urlencoded({extended: true})) 
//HTTP request and response objects are streams and that they're not 'readable' as single object => need parser

// first initialize the home route
app.get('/', (req, res) => {
  res.status(200).json({message: "Success"}) 
})

app.use('/users', userRouter) 

app.use('/auth', authRouter)

