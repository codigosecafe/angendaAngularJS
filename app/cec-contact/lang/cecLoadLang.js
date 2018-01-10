(function() {
	'use strict';

	angular
		.module('cecContactApp')
		.factory('cecLoadLang', cecLoadLang);

	cecLoadLang.$inject = ['$http', '$localStorage', '$sessionStorage', '$window', "$rootScope"];

	/* @ngInject */
	function cecLoadLang($http, $localStorage, $sessionStorage, $window, $rootScope) {
		return {
			get url() {
				return 'app/cec-contact/lang/'
			},
			load_translate: function(lang) {
				var parent = $rootScope;
				if($localStorage.lang != undefined){
					var idioma = $localStorage.lang;
				}else{
					var idioma = lang;
					$localStorage.lang = lang;

				}
				return $http.get(this.url + idioma +'.json')
					.then(response => response.data)
					.then(translate => {
						
						return translate;
					})
			}
		}
	}
})();