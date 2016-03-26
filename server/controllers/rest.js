var mongoose = require('mongoose'), Song = mongoose.model('Song');
//This is code for adding to the database and removing etc.. 
exports.findAll = function(req, res) {
  Song.find({}, function(err, songs) {
    if (err) {
      throw new Error(err);
    }
  	res.send(songs);
  });
};

exports.findOne = function(req, res) {
  Song.findById(req.params.id, function(err, song) {
    if (err) {
      throw new Error(err);
    }
    res.send(song);
  });
};

exports.add = function(req, res) {
  var document = new Song(req.body);
  document.save(function(err, song) {
    if (err) {
      throw new Error(err);
    }
    res.send(song);
  });
};

exports.update = function(req, res) {
  Song.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, function(err, song) {
    if (err) {
      throw new Error(err);
    }
    res.send(song);
  });
};

exports.remove = function(req, res) {
  Song.findByIdAndRemove(req.params.id, function(err, song) {
    if (err) {
      throw new Error(err);
    }
    res.send(song);
  });
};