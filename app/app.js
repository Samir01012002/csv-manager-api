'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const port = process.env.PORT;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // support json encoded bodies

function connectDB(){
  try {
    require('./database/conection')
  } catch (error) {
    console.log("Error conectando a la BD");
  }
}

function initRouter(){
  const router = require('./router');
  app.use('/',router);
  console.log('Init Router');
}

//
server.listen(port, async () => {
  connectDB();
  initRouter();
  console.log(`Server listing on port ${port}`);
});

