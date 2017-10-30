'use strict';

angular.module('botstrapApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('footer', {
        url: '/footer-app',
        template: '<footer-app></footer-app>'
      });
  });
