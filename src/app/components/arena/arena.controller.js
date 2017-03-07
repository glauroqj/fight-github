(function() {
	'use strict';

	angular
	.module('find-github')
	.controller('ArenaController', ArenaController);

	function ArenaController($rootScope, $scope, $element, ngNotify, VerifyUserService) {
		var vm = this;

		vm.add = function(nome) {
			VerifyUserService.verify(nome).then(function(response) {
				if ( response ) {
					vm.info = response;
					var p_gist = vm.info.public_gists;
					var p_repo = vm.info.public_repos;
					vm.total = p_gist + p_repo;
				}
			})
		}

		vm.add2 = function(nome) {
			VerifyUserService.verify(nome).then(function(response) {
				if ( response ) {
					vm.info2 = response;
					var p_gist = vm.info.public_gists;
					var p_repo = vm.info.public_repos;
					vm.total2 = p_gist + p_repo;
				}
			})
		}

		// vm.add = function(nome_fighter, $event) {
		// 	var field = vm.nome_fighter;
		// 	if ( field != '' && field != undefined && field != null ) {
		// 		var count = 0;
		// 		var items = document.getElementsByClassName('item');
		// 		count = items.length;
		// 		vm.todos.push({id: count, task: vm.nome_fighter, status: false});
		// 		vm.nome_fighter= '';
		// 		ngNotify.set('Tarefa adicionada! ', 'success');
		// 	}
		// 	else {
		// 		ngNotify.set('Campo vazio! Favor preencher :] ', 'error');
		// 	}
		// }

		vm.delete = function(item) {
			var index = vm.todos.indexOf(item);
			vm.todos.splice(index, 1); 
			ngNotify.set('Tarefa removida! ', 'warn');
		}

		vm.verify = function(id, $event) {
			var item = document.getElementById(id);
			var teste_val = item.getAttribute('checked');

			if ( id == item.id ) {
				var status = document.getElementById(item.id).parentNode;
				var get_status = status.attributes[0].nodeValue;
				if ( get_status == 'false' ) {
					status.setAttribute("status", "true");
				}
				else {
					status.setAttribute("status", "false");
				}
				
			}

			if ( teste_val == null ) {
				item.setAttribute("checked", "checked");
				ngNotify.set('Tarefa concluída! \o/', {
					position: 'bottom',
					type: 'info',
					duration: 800
				});
			}
			else {
				item.removeAttribute('checked');
			}
		}

		vm.all = function() {
			var items = document.getElementsByClassName('item');
			for ( var i=0; i < items.length; i++ ) {
				items[i].className = 'animated item visible fadeInDown';
			}
		}

		vm.pendent = function() {
			var items = document.getElementsByClassName('item');
			for ( var i=0; i < items.length; i++ ) {
				var get_status = items[i].attributes[0].nodeValue;
				if ( get_status == 'true' ) {
					items[i].className = 'animated item fadeOutUp hidden';
				}
				else if ( get_status == 'false' ) {
					items[i].className = 'animated item fadeInDown visible';
				}
				else {
					items[i].className = 'animated item fadeInDown visible';
				}
			}
		}

		vm.done = function() {
			var items = document.getElementsByClassName('item');
			for ( var i=0; i < items.length; i++ ) {
				var get_status = items[i].attributes[0].nodeValue;
				if ( get_status == 'false' ) {
					items[i].className = 'animated item fadeOutUp hidden';
				}
				else if ( get_status == 'true' ) {
					items[i].className = 'animated item fadeInDown visible';
				}
				else {
					items[i].className = 'animated item fadeInDown visible';
				}
			}
		}

		ngNotify.config({
			theme: 'pure',
			position: 'top',
			duration: 2000,
			sticky: false,
			button: true,
			html: false
		});

	}//end

})();