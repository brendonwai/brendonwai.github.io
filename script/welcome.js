$(document).ready(function(e) {
  $('#typedText').typeIt({
    speed: 50,
    autoStart: false,
    lifeLike: true
  })
  .tiType('class ')
  .tiPause(300).tiSettings({speed: 150})
  .tiType('Programmer {')
  .tiBreak().tiPause(500).tiSettings({speed:100})
  .tiType('public: ').tiBreak().tiPause(300)
  .tiType('String name = ').tiPause(200).tiSettings({speed:70})
  .tiType('"Brendon Wai";')
  .tiBreak().tiPause(500)
  .tiType('');
});
