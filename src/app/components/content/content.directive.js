(function() {
  'use strict';

  angular
    .module('poppyGP')
    .directive('gpContent', gpContentDirective);

  /* @ngInject */
  function gpContentDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/content/content.html'
    };
    return directive;

  }

})();