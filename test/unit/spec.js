describe('app', function() {
	'use strict';

	var module;

	beforeEach(function() {
		module = angular.module('app');
	});

	it('should be registered', function() {
		expect(module).not.toEqual(null);
	});

	describe('Dependencies:', function() {
		var deps;
		var hasModule = function(m) {
			return deps.indexOf(m) >= 0;
		};

		beforeEach(function() {
			deps = module.value('appName').requires;
		});

		//you can also test the module's dependencies
		it('should have ngRoute as a dependency', function() {
			expect(hasModule('ngRoute')).toEqual(true);
		});

		it('should have core as a dependency', function() {
			expect(hasModule('core')).toEqual(true);
		});
	});
});