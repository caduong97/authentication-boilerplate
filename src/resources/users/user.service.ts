import UserModel from './user.model'
import { User } from './user.interface'


export const getAllUsers = async () => {
  try {
    const users = await UserModel.find()
    return users
  } catch (error) {
    return error
    
  }
}

export const getOneUser = async (email: string) => {
  try {
    const user = await UserModel.findOne({email: email})
    return user
  } catch (error) {
    return error
    
  }
}

export const updateUser = async (newUser: User) => {
  try {
    const {email} = newUser
    const updatedUser = await UserModel.findOneAndUpdate(
      {email: email},
      newUser,
      {new: true}
    ) 
    return updatedUser
  } catch (error) {
    return error
  }
}