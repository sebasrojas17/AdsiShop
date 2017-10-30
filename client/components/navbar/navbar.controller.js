'use strict';

class NavbarController {
    ocultarCollapse(){
      $('.navbar-collapse').collapse('hide');
    }
}

angular.module('botstrapApp')
  .controller('NavbarController', NavbarController);
