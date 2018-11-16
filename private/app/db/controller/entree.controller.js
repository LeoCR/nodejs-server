const db = require('../config/config.js');
const Entree = db.entree;
// FETCH all Customers
exports.findAll = (req, res) => {
	Entree.findAll().then(entree => {
	  // Send all customers to Client
	  res.send(entree);
	});
};
// Delete a Customer by Id
exports.delete = (req, res) => {
	const idEntree = req.params.id;
	Entree.destroy({
			where: { idEntree: idEntree }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> Entree Id = '  } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
exports.findById = (req, res) => {	
	Entree.findById(req.params.idEntree).then(dish => {
		res.send(dish);
	})
};
// Post a Customer
exports.create = (req, res) => {
	Entree.create({  
		idEntree: req.body.idEntree,
		name: req.body.name,
		description: req.body.description,
		picture:'/img/uploads/'+req.file.originalname,
		category:req.body.category,
		price:req.body.price 
	}).then(entree => {		
		  // Send created customer to client
		  res.status(200).redirect('/');
	}); 
	res.status(200).redirect('/');
}
// Update a Customer
exports.update = (req, res) => {
  	Entree.update({  
		idEntree: req.body.idEntree,
		name: req.body.name,
		description: req.body.description,
		picture:'/img/uploads/'+req.file.originalname,
		category:req.body.category,
		price:req.body.price
	}, 
		{ 
			where: {
				idEntree: req.body.idEntree
		}}).then(entree => {		
		// Send created customer to client
		res.status(200).redirect('/');
	});
	res.status(200).redirect('/');
};