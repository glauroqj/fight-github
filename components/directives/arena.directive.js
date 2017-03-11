;(function() {

  'use strict';

  /**
   * Main navigation, just a HTML template
   * @author Jozef Butko
   * @ngdoc  Directive
   *
   * @example
   * <main-nav><main-nav/>
   *
   */
   angular
   .module('boilerplate')
   .directive('arena', arenaBox);

   function arenaBox() {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'components/directives/arena.html'
    };

    return directiveDefinitionObject;
  }

})();