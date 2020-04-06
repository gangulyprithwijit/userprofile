const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const webServerConfig = require('../config/web-server.js');
const winston = require('../config/winstonConfig.js');
const router = require('./router.js');
var dateTimeRegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;

var reviver = function(key, value) {
  if (typeof value === 'string' && dateTimeRegExp.test(value)) {
    return new Date(value);
  } else {
    return value;
  }
};


let httpServer;

const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({
  reviver: reviver
})
);

function initialize() {
  
  return new Promise((resolve, reject) => {
    httpServer = http.createServer(app);
    app.get('/', (req, res) => {
      winston.info('App Tested %s', 'Successfully');
      res.end('Welcome to UserProfile!');
    });
 
    httpServer.listen(webServerConfig.port, err => {
      if (err) {
        reject(err);
        return;
      }
 
      winston.info(`Web server listening on localhost:${webServerConfig.port}`);
 
      resolve();
    });
  });
}
 
module.exports.initialize = initialize;



function close() {
  return new Promise((resolve, reject) => {
    httpServer.close((err) => {
      if (err) {
        reject(err);
        return;
      }
 
      resolve();
    });
  });
}
 
module.exports.close = close;

//cors used for Node
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

 // Mount the router at /userProfile so all its routes start with /userProfile
 app.use('/userProfile', router);