$(document).ready(function(e) {
  TweenLite.to($('.terminal'), 0.6, {opacity: 1, onComplete: terminalType});
});

function terminalType() {
  $('#typedText').typeIt({
    speed: 50,
    autoStart: false,
    lifeLike: true
  })
  .tiType(Prism.highlight('class Software_Engineer {',Prism.languages.cpp))
  .tiBreak().tiPause(500)
  .tiType(Prism.highlight('public: ',Prism.languages.cpp)).tiBreak().tiPause(300)
  .tiType(Prism.highlight('std::string name = "Brendon Wai";',Prism.languages.cpp))
  .tiBreak().tiPause(500)
  .tiType(Prism.highlight('std::string message = "Welcome to my homepage!";',Prism.languages.cpp))
  .tiBreak().tiType('}');
};
