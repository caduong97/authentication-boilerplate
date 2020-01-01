import { app } from './server'
import connectDb from './services/db'

// first thing first, connect the database cause it takes time
connectDb().then(() => {
  console.log("database connected")
}).catch(() => {
  console.log("database not connected")
})

const server = app.listen('3000', () => {
  console.log("Running on port 3000")
})

process.on('unhandledRejection', e => {
  server.close(() => {
    process.exit(1)
  })
})