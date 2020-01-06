require('dotenv').config() //package to access environment keys in .env
import express from 'express'
import {urlencoded} from 'body-parser'
import passport from 'passport'
import session from 'express-session'
import flash from 'connect-flash'
import initPassport from './services/passport'
import userRouter from './resources/users/user.router'
import authRouter from './resources/auth/auth.router'
import { ensureAuthenticated } from './middleware/auth'

initPassport(passport)

export const app = express()

//Body parser
app.use(urlencoded({extended: true})) 
//HTTP request and response objects are streams and that they're not 'readable' as single object => need parser

//Express session
// must be used before passport.session()
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize()) //initialize passport
app.use(passport.session()) //set up a persistent login session

// Connect flash
app.use(flash())

// Global variables 
app.use((req, res, next) => {
  res.locals.msg = req.flash('msg')
  next()
})

// first initialize the home route
app.get('/', (req, res) => {
  res.status(200).json({message: "Success"}) 
})

app.use('/users', userRouter) 

app.use('/auth', authRouter) 

app.use('/home', (req, res) => {
  res.json(res.locals.msg)
})

app.use('/dashboard', ensureAuthenticated, (req, res) => {  
  res.status(200).json({message: "you are logged in", user: req.user })
})

