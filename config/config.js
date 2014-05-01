var path = require('path'), rootPath = path.normalize(__dirname + '/..'), env = process.env.NODE_ENV || 'development',
  data = null;


var config = {
  development: {
    port: 3000,
    db: 'mongodb://localhost/songs'
  },
  bluemix: {
    port: 3000,
    db: null
  }
};

if (env === "bluemix") {
  data = process.env.VCAP_SERVICES;
  if (data !== undefined && data !== null && data["mongodb-2.2"] !== null && data["mongodb-2.2"] !== undefined) {
    config.bluemix.db = data["mongodb-2.2"].url;
  }
}

module.exports = config[env];
