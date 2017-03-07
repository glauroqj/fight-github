(function() {
  'use strict';

  angular
  .module('find-github', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngCookies', 
    'ngResource', 'ngRoute', 'ui.bootstrap', 'ngNotify'])
  .config(config);


  function config($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/principal', {
      templateUrl: 'app/templates/principal.html',
      controller: 'PrincipalController',
      controllerAs: 'Principal'
    })
    .otherwise({
      redirectTo: '/principal'
    });

  }
})();
