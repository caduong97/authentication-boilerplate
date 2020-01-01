import passport from 'passport'
import localStrategy from 'passport-local'
import UserModel from '../resources/users/user.model'

const queryUser = async (email: string) => {
	try {
		const user = await UserModel.findOne({email: email})
		return user
	} catch (error) {
		return error
	}
}

const LocalStrategy = localStrategy.Strategy

const initPassport = () => {
  //create strategies for the passport
  passport.use(new LocalStrategy({
    usernameField: 'email'
  }, 
  async (email, password, done) => {
    try {
      const user = await queryUser(email)
      if(!user) {
        return done('user not found', false)
      }

      if(user.checkPassword(password)){
        // remember to delete password property in the user variable!!!
        return done(null, user)
      } else {
        return done('wrong password', false)
      }
    } catch (error) {
      done(error)
    }
  }))
}

export default initPassport 

