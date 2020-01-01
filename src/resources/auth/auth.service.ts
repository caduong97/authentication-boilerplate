import UserModel from '../users/user.model'
import { User } from '../users/user.interface'
import _ from 'lodash'

export const createUser = async (newUser: User ) => {
  try {
    const existingUser = await UserModel.findOne({email: newUser.email})
    if(existingUser) {
      return {error: 'email already used'}
    } 
    else {
      let user = new UserModel()
      user = _.merge(user, newUser)

      // return UserModel.create(user).then(savedUser => {
      //   return savedUser
      // }).catch(error => {
      //   return error
      // })
      return user.save().then(savedUser => {
        console.log("saved here ")
        return savedUser
      }).catch(error => {
        return error
      })
    }
  } catch (error) {
    return error
  }
}