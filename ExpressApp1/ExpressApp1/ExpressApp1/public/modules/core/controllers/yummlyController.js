// getList
//yummlyRecipeCtrl
'use strict';

/**
 * @ngdoc overview
 * @name To Do App
 * @description
 * # To do Application
 *
 * Main module of the application.
 */
angular
.module('lazyFoodieApp')
.controller('yummlyRecipeCtrl', ['$scope', '$rootScope', '$http',
	function($scope,  $rootScope, $http) {
	    $scope.getRecipes = function() {
	        //http://api.yummly.com/v1
	        $http.get('./app/json/recipes.json').success(function (data, status, headers, config) {
	            alert("successfully get the json");
	            var response = data.matches;
	            $scope.results = response;
	            console.log($scope.results);
	            var parsed = [];
	            for (var i = 0; i < response.length; i++) {
	                parsed[i] = { "name": response[i].recipeName, "recipeId": response[i].id, "url": response[i].smallImageUrls };
	            }    
	            $rootScope.parsed = parsed;
	        });
	    }
	}
]);
