var waypoint = new Waypoint({
  element: document.getElementById('popup1'),
  handler: function(direction) {
    console.log('I am 20px from the top of the window');
  },
  offset: function() {
    return this.element.clientHeight
  }
});
