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

						var field1 = document.getElementsByClassName('fighter_name')[0];
						var field_name1 = document.getElementsByClassName('fighter_name')[0].value;
						var field2 = document.getElementsByClassName('fighter_name')[1];
						var field_name2 = document.getElementsByClassName('fighter_name')[1].value;
						if ( field_name1 === user ) {
							ngNotify.set('Lutador do 1º campo não existe ou inválido! ', 'error');
							field1.value = '';
							fighter1.className = 'first-fighter animated fadeOut';
							fighter1.className = 'first-fighter animated hidden'
						}
						else {
							ngNotify.set('Lutador do 2º campo não existe ou inválido! ', 'error');
							field2.value = '';
							fighter2.className = 'second-fighter animated fadeOut';
							fighter2.className = 'second-fighter animated hidden'
						}
					}
					else {
						returnResponseData
					}
				});
		}
	};
});