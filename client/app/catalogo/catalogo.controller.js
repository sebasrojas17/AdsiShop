'use strict';

(function() {

class CatalogoController {
  constructor() {
  }
  $onInit(){
      if(!localStorage.respuestaModal)
      $('#modalOferta').modal();
  }
  noMostarModal(){
    localStorage.respuestaModal = true;
  }
showIcon()
{
  if(this.icon){
    this.icon = false;
  }else{
    this.icon = true;
    }
  }
}
angular.module('botstrapApp')
  .component('catalogo', {
    templateUrl: 'app/catalogo/catalogo.html',
    controller: CatalogoController,
    controllerAs:'vm'
  });

})();
