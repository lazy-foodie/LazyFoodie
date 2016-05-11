angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

       .when('/favRecipes', {
           templateUrl: 'views/favoriteRecipesView.html',
           controller: 'FavortieRecipesController'
       })

		.when('/recipes/:recipeId', {
           templateUrl: 'views/oneRecipeView.html',
           controller: 'RecipeController'
        })

        .when('/profile', {
           templateUrl: 'views/profileView.html',
           controller: 'UserController'
       })

        .when('/register', {
           templateUrl: 'views/registerView.html',
           controller: 'UserController'
       })
        .when('/login', {
           templateUrl: 'views/loginView.html',
           controller: 'UserController'
       })
		.otherwise({
        redirectTo: '/'
      	});

	$locationProvider.html5Mode(true);

}]);