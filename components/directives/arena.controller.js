;(function() {

	angular
	.module('boilerplate')
	.controller('ArenaController', ArenaController);

	ArenaController.$inject = ['$rootScope', '$scope', '$timeout', 'ngNotify', 'VerifyUserService', 'VerifyRepositoriesService'];


	function ArenaController($rootScope, $scope, $timeout, ngNotify, VerifyUserService, VerifyRepositoriesService) {

    // 'controller as' syntax
    var self = this;
    var fighter1 = document.getElementById('first-fighter').getElementsByClassName('card-fighter')[0];
    var fighter2 = document.getElementById('second-fighter').getElementsByClassName('card-fighter')[0];
    var field1 = document.getElementsByClassName('fighter_name')[0];
    var field2 = document.getElementsByClassName('fighter_name')[1];
    var winner = document.getElementsByClassName('winner');
    var load1 = document.getElementById('loading1');
    var load2 = document.getElementById('loading2');
    var name1 = '';
    var name2 = '';
    var fight = $('#fightNow')[0];
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');

    /* fighter 1 */
    self.nome_fighter = '';
    self.check = function() {
    	if ( self.nome_fighter == '' ) {
            $('#first-fighter .card-fighter').slideUp(200, function() {
                $(this).addClass('hidden'); 
            });
            btn1.removeAttribute('disabled');
            $('#fightNow').slideUp(200, function() {
                $(this).addClass('hidden');
            });
            name1 = '';
            cleanWinner();
        }
    }

    self.add = function(nome) {
    	name1 = nome;
    	var nome = nome.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
    	if ( nome != '' && nome != undefined && nome != null && name1 != name2 ) {
            $('#loading1').slideDown(200).removeClass('hidden');
            VerifyUserService.verify(nome).then(function(response) {
                if ( response.name === null ) {
                    ngNotify.set('Lutador inválido! :( ', 'error');
                    $('#loading1').slideUp(200, function() {
                        $(this).addClass('hidden');
                        $('[name="fieldOne"]').val('');
                    });
                    event.stopPropagation();
                }
                else {
                   if ( response ) {
                    btn1.setAttribute('disabled', 'disabled');
                    self.info = response;
                    var p_gist = self.info.public_gists;
                    var p_repo = self.info.public_repos;
                    var followers = self.info.followers;
                    var count_stars = 0;
                    var total_stars = 0;
                    var total = 0;
                    /*call repositories*/
                    VerifyRepositoriesService.verify(nome).then(function(response) {
                     self.repositories = response;
                     self.repositories.forEach( function(element, index) {
                      var get_star = element.stargazers_count;
                      total_stars = total_stars + count_stars + get_star;
                      self.total_stars = total_stars;
                  });/*each*/
                     self.total = p_gist + p_repo + followers + self.total_stars;
                     total = self.total;
                     $('#loading1').slideUp(200, function() {
                        $(this).addClass('hidden');
                    });
                     $('#first-fighter .card-fighter').slideDown(200, function() {
                        $(this).removeClass('hidden').addClass('animated fadeIn');
                    });
                 });/*service*/
                    /*show button fight*/
                    $timeout(function() {
                     fieldFull();
                 }, 400);
                }/*else*/
            }
        });/*service*/
        }/*if*/
        else if ( name1 === name2 && name1 != '' ) {
          ngNotify.set('Lutador já selecionado, escolha outro! ', 'error');
          event.stopPropagation();
      }
      else {
          ngNotify.set('Campo 1º lutador vazio! Favor preencher :] ', 'error');
          event.stopPropagation();
      }
  }
  /*add*/

  /* fighter 2 */
  self.nome_fighter_2 = '';
  self.check2 = function() {
   if ( self.nome_fighter_2 == '' ) {
      $('#second-fighter .card-fighter').slideUp(200, function() {
        $(this).addClass('hidden'); 
    });
      btn2.removeAttribute('disabled');
      $('#fightNow').slideUp(200, function() {
        $(this).addClass('hidden');
    });
      name2 = '';
      cleanWinner();
  }
}

self.add2 = function(nome) {
   name2 = nome;
   var nome = nome.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
   if ( nome != '' && nome != undefined && nome != null && name2 != name1 ) {
    $('#loading2').slideDown(200).removeClass('hidden');
    VerifyUserService.verify(nome).then(function(response) {
        if ( response.name === null ) {
            ngNotify.set('Lutador inválido! :( ', 'error');
            $('#loading2').slideUp(200, function() {
                $(this).addClass('hidden');
                $('[name="fieldTwo"]').val('');
            });
            event.stopPropagation();
        }
        else {
            if ( response ) {
                btn2.setAttribute('disabled', 'disabled');
                self.info2 = response;
                var p_gist = self.info2.public_gists;
                var p_repo = self.info2.public_repos;
                var followers = self.info2.followers;
                var count_stars = 0;
                var total_stars2 = 0;
                var total2 = 0;
                /*call repositories*/
                VerifyRepositoriesService.verify(nome).then(function(response) {
                   self.repositories2 = response;
                   self.repositories2.forEach( function(element, index) {
                      var get_star = element.stargazers_count;
                      total_stars2 = total_stars2 + count_stars + get_star;
                      self.total_stars2 = total_stars2;
                  });/*each*/
                   self.total2 = p_gist + p_repo + followers + self.total_stars2;
                   total2 = self.total2;
                   $('#loading2').slideUp(200, function() {
                    $(this).addClass('hidden');
                });
                   $('#second-fighter .card-fighter').slideDown(200, function() {
                    $(this).removeClass('hidden').addClass('animated fadeIn');
                });
               });/*service*/
                /*show button fight*/
                $timeout(function() {
                   fieldFull();
               }, 400);
            }/*else*/
        }
    })/*service*/
}
else if ( name2 === name1 && name2 != '' ) {
  ngNotify.set('Lutador já selecionado, escolha outro! ', 'error');
  event.stopPropagation();
}
else {
  ngNotify.set('Campo 2º lutador vazio! Favor preencher :] ', 'error');
  event.stopPropagation();
}

}/*add2*/

self.calculate = function(total, lutador1, total2, lutador2) {
   console.log(total, total2)
   if ( total > total2 ) {
      $('#first-fighter .winner').slideDown(200, function() {
        $(this).addClass('animated fadeInDown').removeClass('hidden');

    });
      ngNotify.set(lutador1+' venceu por '+total+' pontos, limpe os campos para um novo DUELO!', 'info');
  }
  else if ( total < total2 ) {
     $('#second-fighter .winner').slideDown(200, function() {
        $(this).addClass('animated fadeInDown').removeClass('hidden'); 
    });
     ngNotify.set(lutador2+' venceu por '+total2+' pontos, limpe os campos para um novo DUELO!', 'info');
 }
 else {
  ngNotify.set('Empate Técnico!', 'info');
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

/* functions effects */
function fieldFull() {
   /*show button fight*/
   var btn_attr1 = btn1.getAttribute('disabled');
   var btn_attr2 = btn2.getAttribute('disabled');
   if ( btn_attr1 === 'disabled' && btn_attr2 === 'disabled' ) {
      $('#fightNow').removeClass('hidden').slideDown(200);
  }
}/*fieldFull*/

/*clean winner*/
function cleanWinner() {
    $('#first-fighter .winner').slideUp(200, function() {
        $(this).addClass('hidden'); 
    });
    $('#second-fighter .winner').slideUp(200, function() {
        $(this).addClass('hidden');
    });
}

}/*end controller*/


})();