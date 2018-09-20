const express = require("express");

const api = express.Router();

const User=require('./models/user')
api.post("/registeration", (req, res) => {
    
    const serverport = new serverport(req.body);
    serverport.save()
    .then(serverport => {
        res.json('Server added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});
