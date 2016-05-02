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
  .module('lazyFoodieApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
 .config(function ($routeProvider) {
     $routeProvider
       .when('/', {
           templateUrl: 'modules/core/views/defaultPage.html',
           controller: 'YummlyRecipesCtrl'
       })
       .when('/recipes/:recipeId', {
           templateUrl: 'modules/recipes/views/oneRecipeView.html',
           controller: 'YummlyRecipesCtrl'
               })
       .when('/favRecipes', {
           templateUrl: 'modules/recipes/views/favoriteRecipesView.html',
           controller: 'FavortieRecipesCtrl'
       })
      .when('/favRecipes/:favoriteId', {
          templateUrl: 'modules/recipes/views/oneRecipeView.html',
          controller: 'FavortieRecipesCtrl'
      })
       .when('/profile', {
           templateUrl: 'modules/users/views/profileview.html',
           controller: 'UsersCtrl'
       })
       .otherwise({
           redirectTo: '/'
       });
 });