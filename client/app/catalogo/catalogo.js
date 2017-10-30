'use strict';

angular.module('botstrapApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('catalogo', {
        url: '/catalogo',
        template: '<catalogo></catalogo>'
      });
  });
