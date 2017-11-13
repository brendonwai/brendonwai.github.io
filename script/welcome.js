$(document).ready(function(e) {
  $('#typedText').typeIt({
    speed: 50,
    autoStart: false,
    lifeLike: true
  })
  .tiType(Prism.highlight('class Programmer {',Prism.languages.cpp))
  .tiBreak().tiPause(500)
  .tiType(Prism.highlight('public: ',Prism.languages.cpp)).tiBreak().tiPause(300)
  .tiType(Prism.highlight('std::string name = "Brendon Wai";',Prism.languages.cpp))
  .tiBreak().tiPause(500)
  .tiType(Prism.highlight('std::string message = "Welcome to my homepage!";',Prism.languages.cpp))
  .tiBreak().tiType('}');
});
