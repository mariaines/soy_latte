$(document).ready(function() {
  var canvas = $('#canvas');
  var wp = new Wordplay('data/test.txt');
});

/**
 * Create the div for this word and add it to the display at the right time.
 * @param {!Object} wordTime  The WordTime object.
 */
function addWordTime(wordTime) {
  var d = document.createElement('div');
  $(d).addClass("word")
      .hide()
      .delay(wordTime.ms)
      .show('fast')
      .html(wordTime.word)
      .css("top", Math.random()*400 + "px")
      .css("left", Math.random()*700 + "px")
      .delay(5000).fadeOut('fast');
  $(d).appendTo(canvas);
}

/**
 * Represents one word/time pair.
 * @param {String} word  The word to display.
 * @param {Int} ms   The time in milliseconds after which this word should appear.
 */
function WordTime(word, ms) {
  this.word = word;
  this.ms = ms;
}

/**
 * Create a new Wordplay. Takes in the url of a data file, structured as
 * word/millisecond pairs, one per line, tab separated.
 * @param {String} url  URL pointing to the data file
 */
function Wordplay(url) {
  $.get(url, function(data) {
      var lines = data.split('\n');
      $.each(lines, function(i, line) {
          var parts = line.split('\t');
          var wt = new WordTime(parts[0], parts[1]);
          addWordTime(wt);
      });
    });
}