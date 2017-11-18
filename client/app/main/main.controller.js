'use strict';

(function() {

class MainController {

  constructor() {

  }

  $onInit() {
    function doAnimations(elems) {
      var animEndEv = 'webkitAnimationEnd animationend';

    elems.each(function(){
      var $this = $(this),
        $animationType = $this.data('animation');
      $this.addClass($animationType).one(animEndEv, function(){
        $this.removeClass($animationType);
      });
    });
    }

    var $myCarousel = $('#productosCarousel'),
      $firstAnimatingElems = $myCarousel.find('.item:first').find(
        "[data-animation ^= 'animated']");

      $myCarousel.carousel();

      doAnimations($firstAnimatingElems);

      $myCarousel.on('slide.bs.carousel', function(e){
        var $animatingElems = $(e.relatedTarget).find(
          "[data-animation ^= 'animated']");
        doAnimations($animatingElems);
      });
  }
}
angular.module('botstrapApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
