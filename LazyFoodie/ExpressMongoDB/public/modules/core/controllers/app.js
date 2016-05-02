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
           templateUrl: 'modules/core/views/defaultPage.html'
       })
       .when('/recipes/new', {
           templateUrl: 'modules/recipes/views/recipesView.html',
           controller: 'RecipesCtrl'
       })
       .when('/recipes', {
           templateUrl: 'modules/recipes/views/recipesView.html',
           controller: 'RecipesCtrl'
       })
       .when('/users', {
           templateUrl: 'modules/users/views/profileView.html',
           controller: 'UsersCtrl'
       })
       .otherwise({
           redirectTo: '/'
       });
 });