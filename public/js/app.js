(function() {
	'use strict';

	angular.module('app', ['ngRoute', 'ngTouch', 'core'])

	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'js/modules/core/core.html',
				controller: 'CoreController',
				controllerAs: 'core'
			})
			.otherwise({
				redirectTo: '/' 
			}); 
	});
})();