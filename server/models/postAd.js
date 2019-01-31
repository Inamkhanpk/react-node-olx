const mongoose = require('mongoose');

var Schema = mongoose.Schema;
const AdSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  uploader: {
    type: String,
    
  },
  image: {
    type: [String],
    //default: ['image-not-found.png']
  },
  sellerName: {
    type: String,
    required: true
  },
  itemCity: {
    type: String,
    required: true
  },
  sellerPhoneNumber: {
    type: String,
    required: true
  },
  
},
);

module.exports = mongoose.model('Ad', AdSchema);