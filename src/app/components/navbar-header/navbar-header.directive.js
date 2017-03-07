(function() {
	'use strict';

	angular
	.module('find-github')
	.directive('navbarheader', function() {
		return {
			scope: true,
			restrict: 'AE',
			replace: 'true',
			templateUrl: 'app/components/navbar-header/navbar-header.html'
		};
	});

})();