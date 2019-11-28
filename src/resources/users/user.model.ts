import mongoose from 'mongoose'

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
  avatar: String
});

const UserModel = mongoose.model('users', userSchema) 
//compile the schema into the model, i.e a table/collection. If the table/collection doesnt exist then it create a new one 

export default UserModel

