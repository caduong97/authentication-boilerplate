export const ensureAuthenticated = (req, res, next) => {
  if(req.isAuthenticated()) {
    return next()
  }
  res.status(403).json({message: "please sign in first"})
}