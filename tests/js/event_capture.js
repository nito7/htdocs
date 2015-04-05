(function() {
  function EventCapture() {
    this.x = 0;
    this.y = 0;
  };
  
  EventCapture.prototype = {
    displayInfo: function() {
      var d = document.getElementById('t1');
      var p = document.createElement('P');
      var t = document.createTextNode("(x, y) = (" + this.x + ", " + this.y + ")");

      p.appendChild(t);
      d.appendChild(p);
    }

  };

  EventCapture.prototype.getPointOfCursor = function(e) {
    window.EventCapture.x = e.screenX;
    window.EventCapture.y = e.screenY;
    window.EventCapture.displayInfo();
  };

  window.EventCapture = new EventCapture();
})();
