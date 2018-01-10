(function() {
    'use strict';

    angular
        .module('cecContactApp')
        .controller('cecActionPanelController', cecActionPanelController);

    cecActionPanelController.$inject = ['cecContactLoadFactory', '$rootScope' , '$localStorage', '$sessionStorage', '$window', 'notificationService'];

    /* @ngInject */
    function cecActionPanelController(cecContactLoadFactory, $rootScope , $localStorage, $sessionStorage, $window, notificationService) {
        var parent = $rootScope;
        var vm = this;
		
		parent.activePanelInfo = true;
		parent.activePanelNewContact = false;  
		parent.activePanelEditContact = false;     	




        // *** FUNÇOES

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
					console.log(list);
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



		// INICIANDO AS FUNÇÕES
        function activate() {
        	
        	
        }

        activate();
    }
})();