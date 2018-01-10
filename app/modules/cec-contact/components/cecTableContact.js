(function() {
    'use strict';

    angular
        .module('cecContactApp')
        .component('cecTableContact', {
            templateUrl: 'app/modules/cec-contact/components/cecTableContact.html',
            controller: cecTableContactComponentController,
            bindings: {
                contacts: '='
            },
            transclude: true

        });

   // cecTableContactComponentController.$inject = ['$scope'];

    /* @ngInject */
    function cecTableContactComponentController() {
    	var vm = this;
        this.orderNow = function(field) {
            this.sortByfield = field;
            this.orderDirection = !this.orderDirection;
        }
    }
})();



