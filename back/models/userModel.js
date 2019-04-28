// userModel.js
var mongoose = require('mongoose');
// Setup schema
var userSchema = mongoose.Schema({
    nom:String, 
    pwd:String, 
    email: String,
   
    
},{collection:'users'});
// Export user model
var User = module.exports = mongoose.model('users', userSchema);
//var User =  mongoose.model('users', userSchema);
//return User;
// module.exports.get = function (callback, limit) {
//     User.find(callback).limit(limit);
// }