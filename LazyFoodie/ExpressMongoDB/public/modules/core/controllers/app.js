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
        templateUrl: 'module/core/default/default.html'
	  })
      .when('/recipes/:recipeId', {
        templateUrl: 'modules/lists/views/newList.html',
        controller: 'RecipesCtrl'
      })
      .when('/users/:userId', {
        templateUrl: 'modules/items/views/itemsView.html',
        controller: 'ItemsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });