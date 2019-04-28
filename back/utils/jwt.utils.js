var jwt = require('jsonwebtoken');

const  JWT_SIGN_SECRET = 'hkhs34vsvsd5fgs8hrthtrh45fgguip0sdzdf1';

module.exports = {
    generateTokenForUser: function(userData){
      return jwt.sign({
          userId: userData.id
      },
    JWT_SIGN_SECRET, {
        
        expiresIn: '1h'
      })  
    }
}