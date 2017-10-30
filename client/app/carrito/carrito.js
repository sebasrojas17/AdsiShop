'use strict';

angular.module('botstrapApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('carrito', {
        url: '/carrito',
        template: '<carrito></carrito>'
      });
  });
