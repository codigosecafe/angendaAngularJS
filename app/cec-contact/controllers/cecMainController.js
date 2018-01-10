(function() {
	'use strict';

	angular
		.module('cecContactApp')
		.controller('cecMainController', cecMainController);

	cecMainController.$inject = ['$rootScope'];

	/* @ngInject */
	function cecMainController($rootScope) {
		var parent = $rootScope;
		var vm = this;

        // *** FUNÇOES

		// INICIANDO AS FUNÇÕES
        function activate() {

        	
        }

        activate();
	}
})();
