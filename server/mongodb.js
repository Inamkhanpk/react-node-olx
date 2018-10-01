const mongoose = require("mongoose");
var url = 'mongodb://inam:inamkhan123@ds161322.mlab.com:61322/olx';




mongoose.connect(url,{useNewUrlParser:true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'CONNECTION ERROR :'));
db.once('open', function () {
  
  console.log('CONNECTION OPENED!!')
  return db;
});