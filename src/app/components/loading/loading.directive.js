(function() {
	'use strict';

	angular
	.module('find-github')
	.directive('loading', function() {
		return {
			scope: true,
			restrict: 'AE',
			replace: 'true',
			templateUrl: 'app/components/loading/loading.html'
		};
	});

})();