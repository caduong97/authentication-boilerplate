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
  console.log(this.isModified('password'))
  if(!this.isModified('password')) {
    return next()
  } 
  const salt = bcrypt.genSaltSync(10)
  this.password = bcrypt.hashSync(this.password, salt)
  console.log("hoho")
  return next()
}) 

const UserModel = mongoose.model('users', userSchema) 
//compile the schema into the model, i.e a table/collection. If the table/collection doesnt exist then it create a new one 

//declare a method for userSchema, that will saved to User model by mongoose and used directly
userSchema.methods.checkPassword = function(plainPassword: string) {
  const hashPassword = this.password
  return bcrypt.compareSync(plainPassword, hashPassword)
}

export default UserModel

