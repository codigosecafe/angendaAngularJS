(function() {
	'use strict';

	angular
		.module('cecContactApp')
		.controller('cecTableContactController', cecTableContactController);

	cecTableContactController.$inject = ['cecContactApiFactory', '$rootScope' ];

	/* @ngInject */
	function cecTableContactController(cecContactApiFactory, $rootScope) {
		var parent = $rootScope;
		var vm = this;
		vm.searchFilter = '';
		parent.listContact = [];
		// *** FUNÇOES
		function loadListContact () {
			vm.listContact = cecContactApiFactory.listContact();
			parent.listContact = vm.listContact ;
			// console.log(parent.listContact);
		}
		// INICIANDO AS FUNÇÕES
        function activate() {
        	
        	loadListContact ();
        }

        activate();
		

	}
})();