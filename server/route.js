
    const express =require('express');
    const router =express.Router();
    const User=require('./models/user');
    router
        .route('/registeration')
        .post(function(req, res){
            console.log(req.body);
            res.send(req.body);
            
            const person =new User()
            
            person.save()
            
            .then(res =>{
                
                res.send({
                    statusCode:200,
                    message:"data saved",
                    
                    
                    
                });
            })
            .catch(err =>{
                res.status(400).send("unable to save to database");
            });
         } );
         module.exports =  router ;
