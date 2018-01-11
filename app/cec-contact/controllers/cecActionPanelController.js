(function() {
    'use strict';

    angular
        .module('cecContactApp')
        .controller('cecActionPanelController', cecActionPanelController);

    cecActionPanelController.$inject = ['cecContactLoadFactory', 'cecStatestLoadFactory', '$rootScope' , '$localStorage', '$sessionStorage', '$window', 'notificationService'];

    /* @ngInject */
    function cecActionPanelController(cecContactLoadFactory, cecStatestLoadFactory,$rootScope , $localStorage, $sessionStorage, $window, notificationService) {
        var parent = $rootScope;
        var vm = this;
		// Defino alguns valores iniciais padrão
		parent.activePanelInfo = true;
		parent.activePanelNewContact = false;  
		parent.activePanelEditContact = false;     	

	    vm.reg = {
	        name: undefined,
	        email: undefined,
	        state: undefined
	    };
	    parent.editReg = {
	        name: undefined,
	        email: undefined,
	        state: undefined
	    };

	    vm.listContact = [{
	        name: undefined,
	        email: undefined,
	        state: undefined
	    }, ];



        // *** FUNÇOES

        var _reset = function() {
	        jQuery('.all_fields').val(null);
	        vm.reg = {
	            name: undefined,
	            email: undefined,
	            state: undefined
	        };
	        parent.editReg = {
	            index_reg: undefined,
	            name: undefined,
	            email: undefined,
	            state: undefined
	        };
	        parent.editIndexReg = undefined;

	        parent.activePanelInfo = true;
			parent.activePanelNewContact = false;  
			parent.activePanelEditContact = false;     	
	    }

        vm.returnPanel = function() {
	        _reset();
	    }

        vm.showAddRegister = function() {
        	parent.activePanelInfo = false;
	        parent.activePanelNewContact = true;  
			parent.activePanelEditContact = false;    
	    }
	    
	    parent.showEditRegister = function() {
        	parent.activePanelInfo = false;
	        parent.activePanelNewContact = false;  
			parent.activePanelEditContact = true;    
	    }

	    parent.deleteRegister = function(trash_contact) {
	       
	        $('#modalDeleteReg').modal('show');

	    }


		vm.loadListContact = function () {
			cecContactLoadFactory.getAll()
				.then(list => {
					
					if (list.length > 0 ) {
						
						parent.listContact = list;
						notificationService.notify({
							title: parent.lang.NOTIFICA_SUCESSO_CARREGAMENTO_CONTATO_TITULO,
							title_escape: false,
							text: parent.lang.NOTIFICA_SUCESSO_CARREGAMENTO_CONTATO_TEXTO,
							text_escape: false,
							type: "success",
							icon: 'fa fa-smile-o fa-2x'
						});
					}else{
						notificationService.notify({
							title: parent.lang.NOTIFICA_ERRO_CARREGAMENTO_CONTATO_TITULO,
							title_escape: false,
							text: parent.lang.NOTIFICA_ERRO_CARREGAMENTO_CONTATO_TEXTO,
							text_escape: false,
							type: "error"
						});
					}
					
				})
		}

		

		function loadListStates () {
			if ($localStorage.listStates == undefined) {
				vm.listState = cecStatestLoadFactory.getAll()
				$localStorage.listStates = vm.listStates;
				vm.listStates = $localStorage.listStates;				
			}else{
				vm.listStates = $localStorage.listStates;
			}	
		}

		// INICIANDO AS FUNÇÕES
        function activate() {
        	
        	loadListStates ();
        }

        activate();
    }
})();