(function() {
	'use strict';

	angular
	.module('find-github')
	.directive('arena', function() {
		return {
			scope: true,
			restrict: 'AE',
			replace: 'true',
			templateUrl: 'app/components/arena/arena.html'
		};
	});

})();