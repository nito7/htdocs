(function() {
  var hook = function() {
    var c = document.getElementById('canvas')
    c.width = 500;
    c.height = 300;
    
    var gl = c.getContext('webgl') || c.getContext('experimental-webgl');

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  };

  if (document.addEventListener) {
    window.addEventListener("load", hook, false);
  }
   
})();
