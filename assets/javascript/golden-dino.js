$(function() {
  var dinoState = 'stopped';

  $('#golden-dino').animateSprite({
    fps: 12,
    animations: {
      start: [0],
      walkLeft: [0, 1],
      walkRight: [3, 2],
      rawr: [4, 5]
    },
    loop: true
  });

  $('#golden-dino').hover(
    function() {
      var dinoOffset = $('#golden-dino').offset();
      var windowWidth = $(window).width();
      if (dinoOffset.left < windowWidth / 2) {
        $('#golden-dino').animateSprite('frame', 5);
      } else if (dinoOffset.left > windowWidth / 2) {
        $('#golden-dino').animateSprite('frame', 4);
      }
    },
    function() {
      var dinoOffset = $('#golden-dino').offset();
      var windowWidth = $(window).width();
      if (dinoOffset.left < windowWidth / 2) {
        $('#golden-dino').animateSprite('frame', 3);
      } else if (dinoOffset.left > windowWidth / 2) {
        $('#golden-dino').animateSprite('frame', 1);
      }
    }
  );

  $('.dino-track').mousemove(function(e) {
    var dinoOffset = $('#golden-dino').offset();
    var windowWidth = $(window).width();
    var trackWidth = $('.dino-track').width();
    var trackOffset = $('.dino-track').offset().left;

    if (
      dinoOffset.left > trackOffset + 60 &&
      dinoOffset.left < trackWidth + trackOffset - 100
    ) {
      if (
        e.pageX < dinoOffset.left + 20 &&
        e.pageX > dinoOffset.left - 80 &&
        dinoState != 'right'
      ) {
        if (dinoState == 'left') {
          $('#golden-dino').stop();
        }
        dinoState = 'right';
        $('#golden-dino').animateSprite('play', 'walkRight');
        $('#golden-dino').animate({ left: '+=60px' }, 'fast', function() {
          $('#golden-dino').animateSprite('stop');
          dinoState = 'stopped';
        });
      } else if (
        e.pageX > dinoOffset.left + 20 &&
        e.pageX < dinoOffset.left + 80 &&
        dinoState != 'left'
      ) {
        if (dinoState == 'right') {
          $('#golden-dino').stop();
        }
        dinoState = 'left';
        $('#golden-dino').animateSprite('play', 'walkLeft');
        $('#golden-dino').animate({ left: '-=60px' }, 'fast', function() {
          $('#golden-dino').animateSprite('stop');
          dinoState = 'stopped';
        });
      }
    } else if (dinoOffset.left < windowWidth / 2) {
      if (dinoState != 'cornered') {
        dinoState = 'cornered';
        $('#golden-dino').animateSprite('frame', 3);
      }
    } else if (dinoOffset.left > windowWidth / 2) {
      if (dinoState != 'cornered') {
        dinoState = 'cornered';
        $('#golden-dino').animateSprite('frame', 1);
      }
    }
  });
});
