'use strict';

angular.module('find-github')
.factory('VerifyUserService', function($http, $q, ngNotify) {
	var returnResponseData = function (response) {
		return response.data;
	};
	return {
		verify: function (user) {
			return $http.get('https://api.github.com/users/'+ user)
			.then(returnResponseData,    
				function errorCallback( response  ) {
					if ( response.status === 404 ) {
						var field1 = document.getElementsByClassName('fighter_name')[0];
						var field_name1 = document.getElementsByClassName('fighter_name')[0].value;
						var field2 = document.getElementsByClassName('fighter_name')[1];
						var field_name2 = document.getElementsByClassName('fighter_name')[1].value;
						if ( field_name1 === user ) {
							ngNotify.set('Lutador do 1º campo não existe ou inválido! ', 'error');
							field1.value = '';
						}
						else {
							ngNotify.set('Lutador do 2º campo não existe ou inválido! ', 'error');
							field2.value = '';
						}
					}
					else {
						returnResponseData
					}
				});
		}
	};
});