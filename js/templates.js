angular.module("boilerplate").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!doctype html><html lang=pt-br data-ng-app=boilerplate><head><base href=\"/\"><meta charset=utf-8><meta http-equiv=x-ua-compatible content=\"ie=edge\"><title>Fight Github - Desafie seus amigos!</title><meta name=HandheldFriendly content=True><meta name=MobileOptimized content=320><meta name=viewport content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\"><link rel=\"shortcut icon\" type=image/x-icon href=images/favicon.ico><meta name=msapplication-TileColor content=#f01d4f><link href=\"//fonts.googleapis.com/css?family=Roboto:300,400,500,700\" rel=stylesheet><link href=\"//fonts.googleapis.com/css?family=Montserrat:400,700\" rel=stylesheet><link rel=stylesheet href=//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css><link rel=stylesheet href=//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css><link rel=stylesheet href=bower_components/OwlCarousel/owl-carousel/owl.carousel.css><link rel=stylesheet href=bower_components/bootstrap/dist/css/bootstrap.min.css><link rel=stylesheet type=text/css href=styles/style.css></head><body><main-nav></main-nav><div data-ng-view></div></body><script type=text/javascript src=js/nonangular/jquery-1.11.2.min.js></script><script type=text/javascript src=js/nonangular/lodash.min.js></script><script type=text/javascript src=js/scripts.js></script><script type=text/javascript src=bower_components/angular/angular.js></script><script type=text/javascript src=bower_components/angular-route/angular-route.js></script><script type=text/javascript src=bower_components/angular-sanitize/angular-sanitize.js></script><script type=text/javascript src=bower_components/angular-bootstrap/ui-bootstrap.js></script><script type=text/javascript src=bower_components/ng-notify/src/scripts/ng-notify.js></script><script type=text/javascript src=app/app.js></script><script type=text/javascript src=app/config.js></script><script type=text/javascript src=components/services/verify-user.service.js></script><script type=text/javascript src=components/services/verify-repositores.service.js></script><script type=text/javascript src=components/directives/main.nav.directive.js></script><script type=text/javascript src=components/directives/arena.directive.js></script><script type=text/javascript src=app/factory.js></script><script type=text/javascript src=app/controller.js></script><script type=text/javascript src=components/directives/arena.controller.js></script><script>\r\n			(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=\r\n				function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;\r\n			e=o.createElement(i);r=o.getElementsByTagName(i)[0];\r\n			e.src=\'https://www.google-analytics.com/analytics.js\';\r\n			r.parentNode.insertBefore(e,r)}(window,document,\'script\',\'ga\'));\r\n			ga(\'create\',\'UA-XXXXX-X\',\'auto\');ga(\'send\',\'pageview\');\r\n		</script></html>");
$templateCache.put("views/home.html","<div data-ng-controller=\"MainController as Main\"><div class=container><div class=row><arena></arena></div></div></div>");
$templateCache.put("components/directives/arena.html","<div data-ng-controller=\"ArenaController as Arena\"><div class=arena-list><div class=\"col-md-5 animated slideInLeft\"><div class=panel><div class=panel-body><h4>Lutador 1</h4><div class=form-fight><form name=formOne><div class=input-group><input type=text class=\"form-control fighter_name\" name=fieldOne placeholder=\"Nome do usuário no github\" data-ng-model=Arena.nome_fighter data-ng-change=Arena.check()> <span class=input-group-btn><button id=btn1 class=\"btn btn-success\" type=submit data-ng-click=Arena.add(Arena.nome_fighter)>Encontrar!</button></span></div><div id=loading1 class=\"loading hidden\"><i class=\"fa fa-spinner fa-pulse fa-ng fa-fw\"></i> <span>loading...</span></div></form><div id=first-fighter><div class=\"card-fighter animated hidden\"><ul class=list-unstyled><li class=\"animated fadeIn\"><img class=\"img-fighter img-responsive img-circle\" data-ng-src={{Arena.info.avatar_url}} alt=\"imagem perfil\"></li><div class=\"winner animated hidden\"><h3><i class=\"fa fa-trophy fa-2x\" aria-hidden=true></i> VENCEDOR</h3></div><li><i class=\"fa fa-user\" aria-hidden=true></i> {{Arena.info.name}}</li><li><i class=\"fa fa-external-link\" aria-hidden=true></i> <a target=blank href={{Arena.info.blog}}>{{Arena.info.blog}}</a></li><li><i class=\"fa fa-building\" aria-hidden=true></i> {{Arena.info.company}}</li><li><i class=\"fa fa-map-marker\" aria-hidden=true></i> {{Arena.info.location}}</li><li><i class=\"fa fa-github\" aria-hidden=true></i> <a target=blank href={{Arena.info.html_url}}>{{Arena.info.html_url}}</a></li></ul><ul class=\"list-inline text-center box-points\"><li><p>Repositórios Gists</p><p class=points>{{Arena.info.public_gists}}</p></li><li><p>Repositórios Públicos</p><p class=points>{{Arena.info.public_repos}}</p></li><li><p>Seguidores</p><p class=points>{{Arena.info.followers}}</p></li><li><p>Estrelas</p><p class=points>{{Arena.total_stars}}</p></li></ul><ul class=list-group><h4>Lista de Repositórios</h4><div data-ng-repeat=\"repositorie in Arena.repositories track by $index\"><li class=list-group-item><div class=text-center><a target=blank href={{repositorie.html_url}}>{{repositorie.name}}</a></div><div class=text-center><span><i class=\"fa fa-star\" aria-hidden=true></i> {{repositorie.stargazers_count}}</span> <span><i class=\"fa fa-eye\" aria-hidden=true></i> {{repositorie.watchers}}</span></div></li></div></ul><div class=total-points><h5>TOTAL</h5><p>{{Arena.total}}</p></div></div></div></div></div></div></div><div class=col-md-2><div id=fightNow class=\"divider animated hidden\"><div class=\"btn btn-lg btn-block btn-fight\" data-ng-click=\"Arena.calculate(Arena.total, Arena.info.name, Arena.total2, Arena.info2.name)\">Lutar!</div></div></div><div class=\"col-md-5 animated slideInRight\"><div class=panel><div class=panel-body><h4>Lutador 2</h4><div class=form-fight><form name=formTwo><div class=input-group><input type=text class=\"form-control fighter_name\" name=fieldTwo placeholder=\"Nome do usuário no github\" data-ng-model=Arena.nome_fighter_2 data-ng-change=Arena.check2()> <span class=input-group-btn><button id=btn2 class=\"btn btn-success\" type=submit data-ng-click=Arena.add2(Arena.nome_fighter_2)>Encontrar!</button></span></div><div id=loading2 class=\"loading hidden\"><i class=\"fa fa-spinner fa-pulse fa-ng fa-fw\"></i> <span>loading...</span></div></form><div id=second-fighter><div class=\"card-fighter animated hidden\"><ul class=list-unstyled><li class=\"animated fadeIn\"><img class=\"img-fighter img-responsive img-circle\" data-ng-src={{Arena.info2.avatar_url}} alt=\"imagem perfil\"></li><div class=\"winner animated hidden\"><h3><i class=\"fa fa-trophy fa-2x\" aria-hidden=true></i> VENCEDOR</h3></div><li><i class=\"fa fa-user\" aria-hidden=true></i> {{Arena.info2.name}}</li><li><i class=\"fa fa-external-link\" aria-hidden=true></i> <a target=blank href={{Arena.info2.blog}}>{{Arena.info2.blog}}</a></li><li><i class=\"fa fa-building\" aria-hidden=true></i> {{Arena.info2.company}}</li><li><i class=\"fa fa-map-marker\" aria-hidden=true></i> {{Arena.info2.location}}</li><li><i class=\"fa fa-github\" aria-hidden=true></i> <a target=blank href={{Arena.info2.html_url}}>{{Arena.info2.html_url}}</a></li></ul><ul class=\"list-inline text-center box-points\"><li><p>Repositórios Gists</p><p class=points>{{Arena.info2.public_gists}}</p></li><li><p>Repositórios Públicos</p><p class=points>{{Arena.info2.public_repos}}</p></li><li><p>Seguidores</p><p class=points>{{Arena.info2.followers}}</p></li><li><p>Estrelas</p><p class=points>{{Arena.total_stars2}}</p></li></ul><ul class=list-group><h4>Lista de Repositórios</h4><div data-ng-repeat=\"repositorie2 in Arena.repositories2 track by $index\"><li class=list-group-item><div class=text-center><a target=blank href={{repositorie2.html_url}}>{{repositorie2.name}}</a></div><div class=text-center><span><i class=\"fa fa-star\" aria-hidden=true></i> {{repositorie2.stargazers_count}}</span> <span><i class=\"fa fa-eye\" aria-hidden=true></i> {{repositorie2.watchers}}</span></div></li></div></ul><div class=total-points><h5>TOTAL</h5><p>{{Arena.total2}}</p></div></div></div></div></div></div></div></div></div>");
$templateCache.put("components/directives/main-nav.html","<header class=header><div class=\"logo animated fadeInDown\"><a href=\"/\"><i class=\"fa fa-github\" aria-hidden=true></i> X <i class=\"fa fa-github\" aria-hidden=true></i><p>Fight Github</p></a></div></header>");}]);