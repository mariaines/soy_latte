$(document).ready(function() {
  var text = "one two three four";
  var canvas = $('#canvas');
  var words = text.split(" ");
  var i=0;
  var interval = setInterval(function(){
      addWord(words[i++]);
      if (i==words.length) {
        window.clearInterval(interval)
      }
    }, 1000);
});

function addWord(word) {
  var d = document.createElement('div');
  $(d).addClass("word")
      .html(word)
      .appendTo(canvas)
      .css("top", Math.random()*400 + "px")
      .css("left", Math.random()*700 + "px");
}