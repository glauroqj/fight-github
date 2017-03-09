(function() {
	'use strict';

	angular
	.module('find-github')
	.controller('ArenaController', ArenaController);

	function ArenaController($rootScope, $scope, $element, ngNotify, VerifyUserService) {
		var vm = this;
		var fighter1 = document.getElementsByClassName('first-fighter')[0];
		var fighter2 = document.getElementsByClassName('second-fighter')[0];

		$scope.nome_fighter = '';
		$scope.$watch('nome_fighter', function(letter) {
			if ( letter === '' ) {
				fighter1.className = 'first-fighter animated fadeOutUp hidden';
			}
		});

		// vm.nome_fighter_2 = '';
		// $scope.$watch('nome_fighter_2', function(letter) {
		// 	if ( letter === '' ) {
		// 		fighter2.className = 'second-fighter animated fadeInUp';
		// 	}
		// });

		vm.add = function(nome) {
			if ( nome != '' && nome != undefined && nome != null ) {
				VerifyUserService.verify(nome).then(function(response) {
					if ( response ) {
						vm.info = response;
						var p_gist = vm.info.public_gists;
						var p_repo = vm.info.public_repos;
						vm.total = p_gist + p_repo;
						fighter1.className = 'first-fighter animated fadeIn visible';
					}
				})
			}
			else {
				ngNotify.set('Campo 1º lutador vazio! Favor preencher :] ', 'error');
			}

		}

		vm.add2 = function(nome) {
			if ( nome != '' && nome != undefined && nome != null ) {
				VerifyUserService.verify(nome).then(function(response) {
					if ( response ) {
						vm.info2 = response;
						var p_gist = vm.info.public_gists;
						var p_repo = vm.info.public_repos;
						vm.total2 = p_gist + p_repo;
					}
				})
			}
			else {
				ngNotify.set('Campo 2º lutador vazio! Favor preencher :] ', 'error');
			}

		}


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