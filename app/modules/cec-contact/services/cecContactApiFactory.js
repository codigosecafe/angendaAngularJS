(function() {
	'use strict';

	angular
		.module('cecContactApp')
		.factory('cecContactApiFactory', cecContactApiFactory);

	cecContactApiFactory.$inject = ['$localStorage', '$sessionStorage', '$window'];

	/* @ngInject */
	function cecContactApiFactory($localStorage, $sessionStorage, $window) {

		// var service = {
		// 	list: [{
		// 		"name": "Meyre Anne Carvalho",
		// 		"email": "meyreanne.42@gmail.com",
		// 		"state": "SC - Santa Catarina"
		// 	}, {
		// 		"name": "Claudio Alexssandro Lino",
		// 		"email": "codigosecafe@gmail.com",
		// 		"state": "PR - Paraná"
		// 	}, {
		// 		"name": "Leandro Felipe Lino",
		// 		"email": "le.lipe@gmail.com",
		// 		"state": "PR - Paraná"
		// 	}, {
		// 		"name": "Rafael Luiz",
		// 		"email": "rafa.luiz@gmail.com",
		// 		"state": "GO - Goiás"
		// 	}]
		// };

		var service = {
			list: [],
			listContact: function () {
				var listaContatoData = [];
				if ($localStorage.listContact != undefined) {
					listaContatoData = [$localStorage.listContact];
				}
				this.list = listaContatoData;
				return listaContatoData;
			},

		}


		return service;



	}
})();