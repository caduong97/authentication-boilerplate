// import passport from 'passport'
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

const initPassport = (passport) => {
  //create strategies for the passport
  passport.use(new LocalStrategy({
    usernameField: 'email'
  }, 
  async (email, password, done) => {
    try {
      const user = await queryUser(email)
      if(!user) {
        return done('user not found', false) 
        //!!! 1st param is error, null if no error
        //2nd param is user, false if there is no user (yeah dont know why boolean either)
        //3rd is options
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

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  
  passport.deserializeUser((id, done) => {
    UserModel.findById(id, (err, user) =>  {
      done(err, user)
    })
  })
}

export default initPassport 

