///**
// * Module dependencies.
// */
//var express = require('express');
//var routes = require('./routes');
//var http = require('http');
//var path = require('path');
//var mongoose = require('mongoose');
//var bodyParser = require('body-parser');
//var url = require('url');
//var app = express();

//// all environments
//app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(app.router);
//app.use(require('stylus').middleware(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public')));
//app.use('/app/json/', express.static('./app/json'));

//// mongoose
//// create application/json parser
//var jsonParser = bodyParser.json();

//// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false });

//var Recipes;
//var Users;

//var idGenerator = 100;

//var Recipes;
//var Users;

//var idGeneratorRecipe = 100;
//var idGeneratorUser = 100;

//////put config url behind file to hide passwords and username
////var mongoDBConnection = require('./db.RecipeSample.config');

////console.log(mongoDBConnection.uri);

////mongoose.connect(mongoDBConnection.uri);
////mongoose.connection.on('open', function () {
////    var Schema = mongoose.Schema;
////    var RecipesSchema = new Schema(
////		{
////		    name: String,
////		    description: String,
////		    recipeId: String,
////		    ingredients: [String],
////		    rating: Number,
////		    sourceUrl: String,
////		    imageUrl: String,
////		    attributes: [{
////		        cuisine: String,
////		        holiday: String,
////		        course: String
////		    }],
////		    totalTime: String
////		},
////	   { collection: 'recipes' }
////	);
////    Recipes = mongoose.model('Recipes', RecipesSchema);
////    var UsersSchema = new Schema(
////		{
////		    userId: Number,
////		    firstName: String,
////		    lastName: String,
////		    email: String,
////		    developer: Boolean,
////		    favorites: [{
////		        recipeId: String,
////		        url: String,
////		        name: String
////		    }]
////		},
////	   { collection: 'users' }
////	);
////    Users = mongoose.model('Users', UsersSchema);
////    console.log('models have been created');

////    module.exports = ('Users', UsersSchema);
////});

//function retrieveAllRecipes(res) {
//    var query = Recipes.find({});
//    query.exec(function (err, itemArray) {
//        res.json(itemArray);
//    });
//}

//function retrieveRecipeDetails(res, query) {
//    var query = Recipes.findOne(query);
//    query.exec(function (err, itemArray) {
//        res.json(itemArray);
//    });
//}

//function retrieveAllUsers(res) {
//    var query = Users.find({});
//    query.exec(function (err, itemArray) {
//        res.json(itemArray);
//    });
//}

//function retrieveUserDetails(res, query) {
//    var query = Users.findOne(query);
//    query.exec(function (err, itemArray) {
//        res.json(itemArray);
//    });
//}

//app.use('/', express.static('./public/'));
//app.use('/app/json/', express.static('./app/json'));

//app.get('/app/users/', function (req, res) {
//    console.log('Query All Users');
//    retrieveAllUsers(res, { userId: id });
//});

//app.get('/app/users/:userId', function (req, res) {
//    var id = req.params.userId;
//    console.log('Query single user with id: ' + id);
//    retrieveUserDetails(res, { userId: id });
//});

//app.get('/app/recipes/', function (req, res) {
//    console.log('Query All Users ');
//    retrieveAllRecipes(res, { recipeId: id });
//});

//app.get('/app/recipes/:recipeId', function (req, res) {
//    var id = req.params.recipeId;
//    console.log('Query single recipe with id: ' + id);
//    retrieveRecipeDetails(res, { recipeId: id });
//});

//app.post('/app/users/', jsonParser, function (req, res) {
//    console.log(req.body);
//    var jsonObj = req.body;
//    jsonObj.userId = idGeneratorUser;
//    Users.create([jsonObj], function (err) {
//        if (err) {
//            console.log('object creation failed');
//        }
//    });
//    res.send(idGeneratorUser.toString());
//    idGeneratorUser++;
//});

//app.post('/app/recipes/', jsonParser, function (req, res) {
//    console.log(req.body);
//    var jsonObj = req.body;
//    jsonObj.recipeId = idGeneratorRecipe;
//    Recipes.create([jsonObj], function (err) {
//        if (err) {
//            console.log('object creation failed');
//        }
//    });
//    res.send(idGeneratorRecipe.toString());
//    idGeneratorRecipe++;
//});

//// development only
//if ('development' == app.get('env')) {
//    app.use(express.errorHandler());
//}

//// routing
//app.get('/', routes.index);
//app.get('/profile', routes.profile);
//app.get('/favorite', routes.favorite);
//app.get('/login', routes.login);


//// let server listen to a port
//http.createServer(app).listen(app.get('port'), function () {
//    console.log('Express server listening on port ' + app.get('port'));
//});


// modules =================================================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================

// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);
console.log('Server is listening on ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app