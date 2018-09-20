const mongoose = require("mongoose");

const db= require('./config/keys.js').mongoURI

mongoose
.connect('db')

.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err))