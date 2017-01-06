var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var request = new Schema({
    username: {
    	type: String, required: true
    },
    latitude: {
    	type: Number, default: 0
    },
    longitude: {
    	type: Number, default:0
    },
    resolved: {
    	type: Boolean, default:false
    },
    driverid: {
    	type:String, default:''
  }
});

var request= mongoose.model('request', requestSchema);
module.exports = request;
