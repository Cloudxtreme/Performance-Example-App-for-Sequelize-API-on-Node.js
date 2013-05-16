module.exports = {
  username: process.env.OPENSHIFT_MYSQL_DB_USERNAME,
  password: process.env.OPENSHIFT_MYSQL_DB_PASSWORD,
  database: process.env.OPENSHIFT_APP_NAME,
  options: {
    host    : process.env.OPENSHIFT_MYSQL_DB_HOST,
    port    : process.env.OPENSHIFT_MYSQL_DB_PORT,
    logging : false
  }
}

// web output text
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Look at console output below.\n');
}).listen(process.env.OPENSHIFT_NODEJS_PORT, process.env.OPENSHIFT_NODEJS_IP);