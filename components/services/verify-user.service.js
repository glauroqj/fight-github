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
   .factory('VerifyUserService', [
    '$http', '$q', 'ngNotify', 'CONSTANTS', VerifyUserService
    ]);



  //////////////// factory

  function VerifyUserService ($http, $q, ngNotify, CONSTANTS) {
    var returnResponseData = function (response) {
      return response.data;
    };
    return {
      verify: function (user) {
        return $http.get('https://api.github.com/users/'+ user)
        .then(returnResponseData,    
          function errorCallback( response  ) {
            if ( response.status === 404 ) {
              var fighter1 = document.getElementsByClassName('first-fighter')[0];
              var fighter2 = document.getElementsByClassName('second-fighter')[0];
              var load1 = document.getElementById('loading1');
              var load2 = document.getElementById('loading2');

              var field1 = document.getElementsByClassName('fighter_name')[0];
              var field2 = document.getElementsByClassName('fighter_name')[1];
              if ( field1.value === user ) {
                //load1.className = 'loading hidden';
                $('#loading1').slideUp(250).addClass('hidden');
                ngNotify.set('Lutador do 1º campo não existe ou inválido! ', 'error');
              }
              else {
                $('#loading2').slideUp(250).addClass('hidden');
                ngNotify.set('Lutador do 2º campo não existe ou inválido! ', 'error');
              }
            }
          // else {
          //  returnResponseData
          // }
        });
      }
    };

  }


})();
