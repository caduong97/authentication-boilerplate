import mongoose, {Document} from 'mongoose'
import { User } from './user.interface'
import bcrypt from 'bcryptjs'

export interface UserDocument extends Document, User {
  checkPassword: (password: string) => boolean
}

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: String,
});




userSchema.pre<UserDocument>('save', function(next) {
  if(!this.isModified('password')) {
    return next()
  } 
  const salt = bcrypt.genSaltSync(10)
  this.password = bcrypt.hashSync(this.password, salt)
  console.log("password hashed")
  return next()
}) 




//declare a method for userSchema, that will saved to User model by mongoose and used directly
userSchema.methods.checkPassword = function(plainPassword: string) {
  const hashPassword = this.password
  return bcrypt.compareSync(plainPassword, hashPassword)
}

const UserModel = mongoose.model('users', userSchema) 
//compile the schema into the model, i.e a table/collection. If the table/collection doesnt exist then it create a new one 
//this must be put after all schema pre hook and methods declaration

export default UserModel

