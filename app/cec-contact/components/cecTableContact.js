(function() {
    'use strict';

    angular
        .module('cecContactApp')
        .component('cecTableContact', {
            templateUrl: 'app/cec-contact/components/cecTableContact.html',
            controller: cecTableContactComponentController,
            bindings: {
                contacts: '<'

            },
            transclude: false

        });

   cecTableContactComponentController.$inject = ['$rootScope'];

    /* @ngInject */
    function cecTableContactComponentController($rootScope) {
    	var parent = $rootScope;
        var vm = this;
        
        vm.showEditRegister = function(index){
            parent.showEditRegister(index);
        }
        vm.deleteRegister = function (contact){
            parent.deleteRegister(contact);
        }


        vm.orderNow = function(field) {
            vm.sortByfield = field;
            vm.orderDirection = !vm.orderDirection;
        }
    }
})();



