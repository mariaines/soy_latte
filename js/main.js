$(document).ready(function() {
  var text = "one two three four";
  var canvas = $('#canvas');
  var words = text.split(" ");
  var i=0;
  var interval = setInterval(function(){
      canvas.text(words[i++]);
      if (i==words.length) {
        window.clearInterval(interval)
      }
    }, 1000);
});