const express = require('express');
const router = express.Router();
const Ad = require('./../models/postAd');
const multer = require('multer');
const storage =multer.diskStorage({
  destination:function(req,file,cb){
   cb(null,'.uploads/')
  },
  filename:function(req,file,cb){
    cb(null,new Date().toISOString()  + file.originalname)


  }
});
/*const fileFilter=(req,file,cb) =>{
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
  cb(null,false);
  }else{
  cb(null,true);
  }
};*/
const upload = multer({
  storage:storage
  /*limits:{
   fileSize:1024*1024*5
        },
  fileFilter:fileFilter
*/

});


router.route('/submitad').post(
  upload.single('image'),
  
  function (req, res) {
    console.log(req.file)
    console.log(req.body)
    
    
    
  }
)

module.exports = router;
