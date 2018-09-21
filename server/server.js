const express = require('express')
var app = express();
var router = express.Router();

const bodyParser = require('body-parser')
const cors = require('cors');
const port =process.env.PORT || 3001;





app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/',router);


require('./route.js')(app, router)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});



app.listen(port, () => console.log('Example app listening on port 3001!'))
