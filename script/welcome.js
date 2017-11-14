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

  var scene2 = new ScrollMagic.Scene({
    triggerElement: '.self-intro-container'
  })
  .setTween([$('.navbar'), $('.self-intro-container')], 0.75, {opacity: 1})
  .addTo(controller);

  var scene3 = new ScrollMagic.Scene({
    triggerElement: '.experience-container'
  })
  .setTween($('.experience-container'), 0.75, {opacity: 1})
  .addTo(controller);

  var tween = TweenMax.staggerFromTo($('li'), 0.2, {opacity: 0, scale: 0.5},{opacity: 1, scale: 1}, 0.1);

  var scene4 = new ScrollMagic.Scene({
    triggerElement: '.skill-container'
  })
  .setTween(tween)
  .addTo(controller);
});



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
