
module.exports = function(app, router){
    
    const User=require('./models/user')
    router
        .route('/registeration')
        .post(function(req, res){
            console.log(req.body)
            res.send({
                message: "You successfully register in application"
            })
        });
}