const mongoose = require('mongoose');
mongoose
.connect("mongodb://127.0.0.1:27017/Project1")
.then(function(){

})
.catch(function(err){

})
module.exports=mongoose.connection;
