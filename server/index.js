const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())




app.post('/signup', (req, res) =>{

    console.log(req.body)
    res.send("Hello WORLDs");

}) 

app.listen(3000, () => console.log('Example app listening on port 3000!'))