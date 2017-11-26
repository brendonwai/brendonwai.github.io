$(document).ready(function(e) {
  TweenLite.to($('.terminal'), 0.6, {opacity: 1, onComplete: terminalType});

  var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onCenter'
		}
	});

  var scene1 = new ScrollMagic.Scene({
    triggerElement: '.terminal-container'
  })
  .setTween($('.navbar'), 0.5, {opacity: 0})
  .addTo(controller);

  var intro_tween = new TimelineMax()
  .to([$('.navbar'), $('.self-intro-container')], 0.75, {opacity: 1})
  .from($('#intro-question-mark'), 1, {ease: Bounce.easeOut, y: -200, opacity: 0});

  var scene2 = new ScrollMagic.Scene({
    triggerElement: '.self-intro-container'
  })
  .setTween(intro_tween)
  .addTo(controller);

  var scene3 = new ScrollMagic.Scene({
    triggerElement: '.experience-container'
  })
  .setTween($('.experience-container'), 0.75, {opacity: 1})
  .addTo(controller);

  var tween = TweenMax.staggerFromTo($('li.skill-item'), 0.2, {opacity: 0, scale: 0.5},{opacity: 1, scale: 1}, 0.1);

  var scene4 = new ScrollMagic.Scene({
    triggerElement: '.skill-container'
  })
  .setTween(tween)
  .addTo(controller);

  $('#website-component-btn').click(function() {
    // $('.used').css({'border-radius': '10px'}).effect('highlight',{color: '#42bef8'}, 3000);
    $('.used').animate({
      'background-color' : '#42bef8',
      'border-radius' : '10px'
    },1000);
  });

  controller.scrollTo( function (newpos) {
    TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
  })

  $('a[href^="#"]').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    if ($(id).length > 0){
      controller.scrollTo(id);
    }
  });

  $('.card').hover(card_over, card_leave);

  'use strict';

  window.addEventListener('load', function() {
    var form = document.getElementById('needs-validation');
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  }, false);
});

function card_over(){
  TweenMax.to(this, 0.5, {scale: 1.04});
}

function card_leave(){
  TweenMax.to(this, 0.5, {scale: 1});
}

function terminalType() {
  $('#typedText').typeIt({
    speed: 50,
    autoStart: false,
    lifeLike: true
  })
  .tiType(Prism.highlight('class Software_Engineer {',Prism.languages.cpp))
  .tiBreak().tiPause(500)
  .tiType(Prism.highlight('public: ',Prism.languages.cpp))
  .tiBreak().tiPause(300)
  .tiType(Prism.highlight('std::string name = "Brendon Wai";',Prism.languages.cpp))
  .tiBreak().tiPause(500)
  .tiType(Prism.highlight('std::string message = "Welcome to my homepage!";',Prism.languages.cpp))
  .tiBreak().tiType('}');
};
