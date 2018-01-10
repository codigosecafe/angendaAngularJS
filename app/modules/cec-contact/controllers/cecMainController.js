(function() {
	'use strict';

	angular
		.module('cecContactApp')
		.controller('cecMainController', cecMainController);

	cecMainController.$inject = ['cecLoadLang', '$scope'];

	/* @ngInject */
	function cecMainController(cecLoadLang, $scope) {
		var vm = this;
		//- Carrego a tradução dos textos
		vm.translate = [];

		



		
		


		



		

		

    	

        // *** FUNÇOES
		function loadTranslate () {
			// Pego o idioma do atributo lang da tag HTML e passo para a factory
			// para carregar o arquivo de tradução
			cecLoadLang.load_translate(document.documentElement.lang)
				.then(load_translate => {
					vm.translate = load_translate;
				});	
		}
		// INICIANDO AS FUNÇÕES
        function activate() {
        	
        	loadTranslate();
        }

        activate();
	}
})();
