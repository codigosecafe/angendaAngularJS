(function() {
	'use strict';

	angular
		.module('cecContactApp')
		.factory('cecContactLoadFactory', cecContactLoadFactory);

	cecContactLoadFactory.$inject = ['$localStorage', '$sessionStorage', '$window', '$http'];

	/* @ngInject */
	function cecContactLoadFactory($localStorage, $sessionStorage, $window, $http) {

		var service = {
			status: '',
			list: [],
			listContact: function() {
				var listaContatoData = [];

				if ($localStorage.listContact == undefined) {

					$http({
						method: 'GET',
						url: 'app/modules/cec-contact/data/register.json'
					}).then(function successCallback(response) {
						$localStorage.listContact = response.listContact;
						this.status = 'succsses';
					}, function errorCallback(response) {
						this.status = 'Erro:01';
					});

					listaContatoData = $localStorage.listContact | [];

				} else {
					listaContatoData = $localStorage.listContact;
				}
				this.list = listaContatoData;
				return listaContatoData;
			},

		}

		return service;

		////////////////

		function func() {}
	}
})();