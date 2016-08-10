//var waypoint = new Waypoint({
//  element: document.getElementById('popup1'),
//  handler: function(direction) {
//    console.log('I am 20px from the top of the window');
//  },
//  offset: function() {
//    return this.element.clientHeight
//  }
//});

//var $popup1 = $('.popup1');
//
//$popup1.waypoint(function () {
//    console.log('test');
//});
//


var $dipper = $('.dipper');

$dipper.waypoint(function (direction) {
  if (direction == 'down') {
    $dipper.addClass('js-dipper-animate');
  } else {
    $dipper.removeClass('js-dipper-animate');
  }
}, { offset: '50%' });
