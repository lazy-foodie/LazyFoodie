var express = require('express');
var url = require('url');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var app = express();

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var Recipes;
var Users;

var idGenerator = 100;

//put config url behind file to hide passwords and username
var mongoDBConnection = require('./db.RecipeSample.config');

console.log(mongoDBConnection.uri);

mongoose.connect(mongoDBConnection.uri);
mongoose.connection.on('open', function() {
	var Schema = mongoose.Schema;
	var RecipesSchema = new Schema( 
		{
			name: String,
			description: String,
			recipeId: Number,
			ingredients: [String],
			rating: Number,
			sourceUrl: String,
			imageUrl: String,
			attributes: [  {
				cuisine: String,
				holiday: String,
				course: String
			} ],
			totalTime: String
		},
	   {collection: 'recipes'}
	);
	Recipes = mongoose.model('Recipes', RecipesSchema);	
	var UsersSchema = new Schema( 
		{
			userId: Number,
			firstName: String,
			lastName: String,
			email: String,
			developer: Boolean,
			favorites: [ {  
				recipeId : Number,
				url: String,
				name: Sring
			} ]
		},
	   {collection: 'users'}
	);
	Tasks = mongoose.model('Users', UsersSchema);
	console.log('models have been created');
});

function retrieveAllRecipes(res) {
	var query = Recipes.find({});
	query.exec(function (err, itemArray) {
		res.json(itemArray);
	});
}

function retrieveRecipeDetails(res, query) {
	var query = Recipes.findOne(query);
	query.exec(function (err, itemArray) {
		res.json(itemArray);		
	});
}

function retrieveAllUsers(res) {
	var query = Users.find({});
	query.exec(function (err, itemArray) {
		res.json(itemArray);
	});
}

function retrieveUserDetails(res, query) {
	var query = Users.findOne(query);
	query.exec(function (err, itemArray) {
		res.json(itemArray);		
	});
}

app.use('/', express.static('./public/'));
app.use('/app/json/', express.static('./app/json'));

app.get('/app/users/', function (req, res) {
	console.log('Query All Users');
	retrieveAllUsers(res, {userId: id});
});

app.get('/app/users/:userId', function (req, res) {
	var id = req.params.userId;
	console.log('Query single user with id: ' + id);
	retrieveUserDetails(res, {userId: id});
});

app.get('/app/recipes/', function (req, res) {
	console.log('Query All Users ');
	retrieveAllRecipes(res, {recipeId: id});
});

app.get('/app/recipes/:recipeId', function (req, res) {
	var id = req.params.recipeId;
	console.log('Query single recipe with id: ' + id);
	retrieveRecipeDetails(res, {recipeId: id});
});

app.post('/app/users/', jsonParser, function(req, res) {
	console.log(req.body);
	var jsonObj = req.body;
	jsonObj.userId = idGenerator;
	Users.create([jsonObj], function (err) {
		if (err) {
			console.log('object creation failed');
		}
	});
	res.send(idGenerator.toString());
	idGenerator++;
});

app.post('/app/recipes/', jsonParser, function(req, res) {
	console.log(req.body);
	var jsonObj = req.body;
	jsonObj.recipeId = idGenerator;
	Users.create([jsonObj], function (err) {
		if (err) {
			console.log('object creation failed');
		}
	});
	res.send(idGenerator.toString());
	idGenerator++;
});

app.listen(80);
