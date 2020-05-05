require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// add auth later
// const authenticate = require('../auth/authenticate-middleware');

const authRouter = require('../auth/auth-router.js');

const eventsRouter = require('../events/events-router.js');

const server = express();

server.use(helmet());
server.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://something.com'      
    ],
    credentials: true
  })
);
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/events', eventsRouter);


server.get('/', (req, res) => {
    res.status(200).json({ api: 'Up and running' });
  });
  
module.exports = server;