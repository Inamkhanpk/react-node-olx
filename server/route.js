

'use strict';
module.exports = function(app, router){
    
    const User=require('./models/user')
    router
        .route('/register')
        .post(function(req, res){
            res.send({
                message: "You successfully register in application"
            })
        });
}


