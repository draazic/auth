// Filename: api-routes.js
// Initialize express router
var express = require('express');
// Import contact controller
var userController = require('./routes/userController');

// Set default API response
// router.get('/', function (req, res) {
//     res.json({
//        status: 'API Its Working',
//        message: 'Welcome to RESTHub crafted with love!'
//     });
// });


// user routes
exports.router = (function(){
    var apiRoute = express.Router();
    apiRoute.route('/users/register/').post(userController.register);
    apiRoute.route('/users/login/').post(userController.login);

    return apiRoute;
})();
//router.route('/users/register/').post(userController.register);
//router.route('/users/login/').post(userController.login);
//return router ??????????
// router.route('/users')
//     .get(userController.server)
//     .post(userController.new);
// router.route('/users/:contact_id')
//     .get(userController.view)
//     .patch(userController.update)
//     .put(userController.update)
//     .delete(userController.delete);


// Export API routes
//module.exports = apiRouter;