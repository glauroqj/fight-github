;(function() {


  'use strict';


  /**
   * $http service abstraction to make API calls with any HTTP method,
   * custom url and data object to be sent as request.
   * Every REST API call is measured, you can see how much it took
   * in the console.
   *
   * @category  factory
   * @author    Jozef Butko
   * @example   Inject QueryService as the dependency and then use it this way:
   *
   * QueryService.query('GET', 'users/user/', {get: query}, {post: params})
      .then(function(data) {
        console.log(data);
      }, function(error) {
        console.log(error);
      });
   *
   * @param     {String} method HTTP method, eg. 'PUT', 'GET'...
   * @param     {String} url API endpoint, eg. 'users/user' or 'system-properties'
   * @param     {Object} params Map of strings or objects which will be turned
   *                     to `?key1=value1&key2=value2` after the url. If the value
   *                     is not a string, it will be
   *                     JSONified
   * @return    {Object} data Data to be sent as the request message data
   * @version   1.1
   *
   */


   angular
   .module('boilerplate')
   .factory('VerifyRepositoriesService', [
    '$http', '$q', 'ngNotify', 'CONSTANTS', VerifyRepositoriesService
    ]);



  //////////////// factory

  function VerifyRepositoriesService ($http, $q, ngNotify, CONSTANTS) {
    var returnResponseData = function (response) {
      return response.data;
    };
    return {
      verify: function (user) {
        return $http.get('https://api.github.com/users/'+user+'/repos')
        .then(returnResponseData,    
          function errorCallback( response  ) {
            if ( response.status === 404 ) {
            }
            else {
              returnResponseData
            }
          });
      }
    };

  }


})();
