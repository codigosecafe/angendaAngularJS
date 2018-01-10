(function() {
	'use strict';

	angular
		.module('cecContactApp')
		.factory('cecLoadLang', cecLoadLang);

	cecLoadLang.$inject = ['$http'];

	/* @ngInject */
	function cecLoadLang($http) {
		return {
			get url() {
				return 'app/modules/cec-contact/lang/'
			},
			load_translate: function(lang) {
				return $http.get(this.url + lang +'.json')
					.then(response => response.data)
					.then(translate => {
						return translate;
					})
			}
		}
	}
})();