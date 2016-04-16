var mongoose = require('mongoose'), Site = mongoose.model('Site');
//This is code for adding to the database and removing etc.. 
exports.findAll = function(req, res) {
  Site.find({}, function(err, sites) {
    if (err) {
      throw new Error(err);
    }
  	res.send(sites);
  });
};

exports.findOne = function(req, res) {
  Site.findById(req.params.id, function(err, site) {
    if (err) {
      throw new Error(err);
    }
    res.send(site);
  });
};

exports.add = function(req, res) {
  var document = new Site(req.body);
  document.save(function(err, site) {
    if (err) {
      throw new Error(err);
    }
    res.send(site);
  });
};

exports.update = function(req, res) {
  Site.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, function(err, site) {
    if (err) {
      throw new Error(err);
    }
    res.send(site);
  });
};

exports.remove = function(req, res) {
  Site.findByIdAndRemove(req.params.id, function(err, site) {
    if (err) {
      throw new Error(err);
    }
    res.send(site);
  });
};