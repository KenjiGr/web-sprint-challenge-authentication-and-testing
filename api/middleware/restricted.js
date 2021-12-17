const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if(!token){
    return next({status: 4-1, message: 'token required'})
  }
  jwt.verify(token, JWT_SECRET, (err, verified) => {
    if(err){
      return next({status: 401, message: 'token required'})
    }
    req.verifiedJwt = verified
    next()
  })
  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
};
