const express = require('express');
const helmet = require('helmet');
const jwt = require('jsonwebtoken')

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.send("Works!");
});

server.get('/Token', (req, res) => {//Here we create our JWT
    const payload = {
      subject: 'user',
      username: 'rowe',
      department: 'electronics'
    };
  
    const secret = "thisisasecret";
  
    const options = {
      expiresIn: '1h'
    };
  
    const token = jwt.sign(payload, secret, options)
    console.log(token)
  
    res.json(token)
  });

module.exports = server;