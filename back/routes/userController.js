// contactController.js
// Import user model
User = require('../models/userModel');
//var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var jwtUtils = require('../utils/jwt.utils');
//var jwt = require('jsonwebtoken');


module.exports = {
    register: function(req, res){
        var email = req.body.email;
        var nom = req.body.nom;
        var pwd = req.body.pwd;
        //console.log(email)
        

    if (email == "" || nom == "" || pwd == ""){
        return res.status(400).json({'error':'missing parameter'});
        }
       User.findOne(
           {email: email}
           )
        .then(function(userFound){
            console.log(userFound);
            if (!userFound){
                            console.log(userFound)
                            console.log(email)
                            bcrypt.hash(pwd, 5, function(err, bcryptedPassword){
                                var newUser = User.create({
                                   email:email,
                                   nom:nom,
                                   pwd:bcryptedPassword 
                                })
                                .then(function(newUser){
                                    return res.status(201).json({
                                        'userId': newUser.id
                                    })
                                })
                                .catch(function(err){
                                    return res.status(500).json({'error':'cannot add user'})
                                })
                            });
                        }else{
                            
                            return res.status(409).json({'error':'user already existe'});
                        }

        })
        .catch(function(err){
            return res.status(500).json({ 'error':'unable to verify user'});
            })

    },
    login: function(req, res){
            var email = req.body.email;
            var pwd =req.body.pwd;

            if (email=='' || pwd == '' ){
                return res.status(400).json({'error':'missing paramater'});
            }
            User.findOne({email: email})

            .then(function(userFound)
            {
                if(userFound){
                    bcrypt.compare(pwd, userFound.pwd, function(errBycrypt, resBycrypt){
                        if(resBycrypt){
                            return res.status(200).json({
                                'userId': userFound.id,
                                'token': jwtUtils.generateTokenForUser(userFound)

                            })

                        }else{
                            return res.status(403).json({'error':'invalid password'})
                        }
                    })

                }
                else{
                    return res.status(404).json({'error':'user not exist'})
                }
            })
            .catch(function(err){
                return res.status(500).json({'error':'unable to verify user'});
            })
            

    }
}




