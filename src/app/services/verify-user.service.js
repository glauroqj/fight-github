'use strict';

angular.module('find-github')
.factory('VerifyUserService', function($http, $q, $timeout, ngNotify) {
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
							load1.className = 'loading hidden';
							ngNotify.set('Lutador do 1º campo não existe ou inválido! ', 'error');
						}
						else {
							load2.className = 'loading hidden';
							ngNotify.set('Lutador do 2º campo não existe ou inválido! ', 'error');
						}
					}
					// else {
					// 	returnResponseData
					// }
				});
		}
	};
});