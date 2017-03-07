'use strict';

angular.module('find-github')
.factory('VerifyUserService', function($http, $q, ngNotify) {
	var returnResponseData = function (response) {
		return response.data;
	};
	var handleResponseError = function (logMessage) {
		return function (errResponse) {
			ngNotify.set('Usuário não existe ', 'warn');
			//console.error(logMessage);
			//return $q.reject(errResponse);

		};
	};
	return {
		verify: function (user) {
			return $http.get('https://api.github.com/users/'+ user)
			.then(returnResponseData, handleResponseError('Usuário não encontrado!'));
		}
	};
});