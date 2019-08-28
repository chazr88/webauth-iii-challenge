const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {

  const token = req.headers.authorization;

  if(token) {
    jwt.verify(token, 'thisisasecret', (err, decodedToken) => {
      if(err) {
        //bad Token
        res.status(401).json({message: 'sorry'});
      } else { //decoded TOken
        //nice
        req.decodedJwt = decodedToken;
        next();
      }
    })
  } else {
    res.status(401).json({message: 'no token sorry'});
  }
};
