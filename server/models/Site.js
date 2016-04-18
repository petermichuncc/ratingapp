//This is code for setting up the database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Site = new Schema({
	title: String,
  url: String,
	name: String,
	score: Number
}, {
  versionKey: false,
  
  toJSON: {
    virtuals: true,
    transform: function(doc, ret, options) {
      ret.id = ret._id.toHexString();
      delete ret._id;
    }
  },
  
  toObject: {
    virtuals: true
  }
});

mongoose.model('Site', Site);
