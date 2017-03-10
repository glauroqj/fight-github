'use strict';

angular.module('find-github')
.factory('VerifyRepositoriesService', function($http, $q, $timeout, ngNotify) {
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
});