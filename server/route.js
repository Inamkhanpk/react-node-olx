
    const express =require('express');
    const router =express.Router();
    const User=require('./models/user');
    router
        .route('http://localhost:3001/registeration')
        .post(function(req, res){
            console.log(req.body);
            const person =new User(req.body);
            person.save()
            .then(res =>{
                res.json(person);
            })
            .catch(err =>{
                res.status(400).send("unable to save to database");
            });
         } );
         module.exports =  router ;
