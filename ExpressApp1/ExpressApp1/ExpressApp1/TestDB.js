/*var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sampleDB');


var post = mongoose.model("UsersSchema");


//create new model
var post = new user({userId: 4,  firstName: "e", lastName: "o", email: "ack", developer: true, favorites: [{recipeId: "sd", url: "sdf", name: "sdf"}]});

//save model to MongoDB
post.save(function (err) {
  if (err) {
		return err;
  }
  else {
  	console.log("Post saved");
  }
});*/

var user = module.exports = {};
var User = require('.../models/UsersSchema');
user.get = function(req, res) {
	User.find({userId: 1}).exec(function(err, users) {
		res.render('users', {
			users: users,
		});
	}
}








/*var mongoose    = require('mongoose'), 
User = mongoose.model('Users', User);

exports.create = function(req, res, next) {

    var username = req.body.username; 
    var password = req.body.password;

    // Do epic sh...what?! :)
}*/

/*var models = require('./models'); 

exports.populateMaterials = function(req, res){
    console.log("populateMaterials");
    for (var i = 0; i < materials.length; i++ ){
        var mat = new models.Materials();
        console.log(mat);
        mat.name = materials[i].variantName;
        mat.materialId = materials[i].itemNumberExtension;
        mat.surcharge = materials[i].priceOffset;
        for (var j = 0; j < materials[i].colors.length; j++){
            mat.colors.colorName = materials[i].colors[j].name;
            mat.colors.colorId = materials[i].colors[j].itemNumberExtension;
            mat.colors.surcharge = materials[i].colors[j].priceOffset;
        }
        mat.save(function(err){
            if(err){
                console.log(err);
            } else {
                console.log('success');
            }
        });
    }
    res.render('index', { title: 'Express' });
};*/