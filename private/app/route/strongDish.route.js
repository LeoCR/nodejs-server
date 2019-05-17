module.exports = function(app,router,upload,path,isLoggedIn) {
    const strongDish = require(path.resolve(__dirname+'/../db/controller/strongDish.controller.js')); 
    // Retrieve all 
    app.get('/api/strongs-dishes', strongDish.findAll);
    app.delete('/api/strongs-dish/delete/:id', isLoggedIn,strongDish.delete);
    app.post('/api/strong-dish/add/',[isLoggedIn,upload.single('picture')],strongDish.create);
    app.get('/api/strong-dish/show/:id', strongDish.findById);
    // Update with Id
    app.put('/api/strong-dish/update/:id',isLoggedIn, strongDish.update);
    app.post('/api/strong-dish/update/',[isLoggedIn, upload.single('picture')],strongDish.updateImg);
    
}