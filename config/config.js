var path = require('path'), rootPath = path.normalize(__dirname + '/..'), env = process.env.NODE_ENV || 'development',
  data = null;


var config = {
  port: 3000,
  db: 'mongodb://localhost/songs',
  host: 'localhost'
};

if (env === "bluemix") {
  var conf = JSON.parse(process.env.VCAP_SERVICES);
  config.db = conf["mongodb-2.2"][0].credentials.url;
  config.port = process.env.VCAP_APP_PORT || 3000;
  config.host = process.env.VCAP_APP_HOST || 'localhost';
}

module.exports = config;
