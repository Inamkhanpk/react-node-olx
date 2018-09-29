//Initialize express
const express = require('express');
const app = express();



//bodyparser for post request =>res.body
const bodyParser = require('body-parser');

const cors = require('cors');

//port selection
const port = process.env.PORT || 3001;
//Mongodb Connection


require('./mongodb');



//route define here
const UserRoute = require('./route');

app.use(cors());

//data must be in json form through  body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//route use here
app.use(UserRoute);





 




  //Server run on port
app.listen(port, () => {
console.log('Example app listening on port !',port);
});