(function() {
	'use strict';

	angular
	.module('find-github')
	.controller('ArenaController', ArenaController);

	function ArenaController($rootScope, $scope, $element, $timeout, ngNotify, VerifyUserService, VerifyRepositoriesService) {
		var vm = this;
		var fighter1 = document.getElementsByClassName('first-fighter')[0];
		var fighter2 = document.getElementsByClassName('second-fighter')[0];
		var field1 = document.getElementsByClassName('fighter_name')[0];
		var field2 = document.getElementsByClassName('fighter_name')[1];
		var name1 = 0;
		var name2 = 0;
		var fight = document.getElementById('fightNow');
		var btn1 = document.getElementById('btn1');
		var btn2 = document.getElementById('btn2');


		vm.nome_fighter = '';
		vm.check = function() {
			if ( vm.nome_fighter == '' ) {
				fighter1.className = 'first-fighter animated fadeOut';
				btn1.removeAttribute('disabled');
				$timeout( function() {
					fighter1.className = 'first-fighter hidden'
				}, 200);
			}
		}

		vm.nome_fighter_2 = '';
		vm.check2 = function() {
			if ( vm.nome_fighter_2 == '' ) {
				fighter2.className = 'second-fighter animated fadeOut';
				btn2.removeAttribute('disabled');
				$timeout( function() {
					fighter2.className = 'second-fighter hidden'
				}, 200);
			}
		}

		vm.add = function(nome) {
			name1 = nome;
			var nome = nome.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
			if ( nome != '' && nome != undefined && nome != null && name1 != name2 ) {
				VerifyUserService.verify(nome).then(function(response) {
					if ( response ) {
						btn1.setAttribute('disabled', '');
						vm.info = response;
						var p_gist = vm.info.public_gists;
						var p_repo = vm.info.public_repos;
						var followers = vm.info.followers;
						var count_stars = 0;
						var total_stars = 0;
						var total = 0;
						/*call repositories*/
						VerifyRepositoriesService.verify(nome).then(function(response) {
							vm.repositories = response;
							vm.repositories.forEach( function(element, index) {
								var get_star = element.stargazers_count;
								total_stars = total_stars + count_stars + get_star;
								vm.total_stars = total_stars;
							});/*each*/
						});/*service*/
						vm.total = p_gist + p_repo + followers + total_stars;
						total = vm.total;
						fighter1.className = 'first-fighter animated fadeIn visible';
					}/*if*/
				});/*service*/
			}/*if*/
			else if ( name1 === name2 && name1 != '' ) {
				field1.value = '';
				ngNotify.set('Lutador já selecionado, escolha outro! ', 'error');
			}
			else {
				ngNotify.set('Campo 1º lutador vazio! Favor preencher :] ', 'error');
			}

		}

		vm.add2 = function(nome) {
			name2 = nome;
			var nome = nome.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
			if ( nome != '' && nome != undefined && nome != null && name2 != name1 ) {
				VerifyUserService.verify(nome).then(function(response) {
					if ( response ) {
						btn2.setAttribute('disabled', '');
						vm.info2 = response;
						var p_gist = vm.info2.public_gists;
						var p_repo = vm.info2.public_repos;
						var followers = vm.info2.followers;
						var count_stars = 0;
						var total_stars2 = 0;
						var total2 = 0
						/*call repositories*/
						VerifyRepositoriesService.verify(nome).then(function(response) {
							vm.repositories2 = response;
							vm.repositories2.forEach( function(element, index) {
								console.log(index, element)
								var get_star = element.stargazers_count;
								total_stars2 = total_stars2 + count_stars + get_star;
								vm.total_stars2 = total_stars2;
							});/*each*/
						});/*service*/
						vm.total2 = p_gist + p_repo + followers + total_stars2;
						total2 = vm.total2;
						fighter2.className = 'second-fighter animated fadeIn visible';
					}/*if*/
				})/*service*/
			}
			else if ( name2 === name1 && name2 != '' ) {
				field2.value = '';
				ngNotify.set('Lutador já selecionado, escolha outro! ', 'error');
			}
			else {
				ngNotify.set('Campo 2º lutador vazio! Favor preencher :] ', 'error');
			}

		}

		vm.calculate = function(total, total2) {
			console.log(total, total2)
		}

		/* BELOW OLD CODE */

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