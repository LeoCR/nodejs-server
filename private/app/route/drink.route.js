module.exports = function(app,router,upload) {
    const drink = require('../db/controller/drink.controller.js'); 
    // Retrieve all 
    app.get('/api/drinks', drink.findAll);
    app.delete('/api/drink/delete/:id',isLoggedIn, drink.delete);
    app.post('/drink/add/',upload.single('picture'),drink.create);
    app.get('/api/drink/show/:idStrongDish',isLoggedIn, drink.findById);
    // Update with Id
    app.put('/api/drink/update/:idStrongDish',isLoggedIn, drink.update);
    app.post('/drink/update/', upload.single('picture'),drink.updateImg);
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()){
            return next();
        }
        res.redirect('/signin');
    }
}