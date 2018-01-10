(function() {
	'use strict';

	angular
		.module('cecContactApp')
		.controller('cecTableContactController', cecTableContactController);

	cecTableContactController.$inject = ['cecContactApiFactory'];

	/* @ngInject */
	function cecTableContactController(cecContactApiFactory) {
		var vm = this;
		vm.searchFilter = '';

		vm.listContact = cecContactApiFactory.list;

	}
})();