import UserModel from './user.model'
import { User } from './user.interface'

export const createNewUser = ({fname, lname, email, password, avatar}: User ) => {
  let newUser = {
    fname, lname, email, password, avatar
  }
  return UserModel.create(newUser).then(savedUser => {
    return savedUser
  }).catch(error => {
    return error
  })
}