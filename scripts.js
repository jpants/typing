var i = 0,
    x = 0,
    complete = false;

var words = document.querySelectorAll('.word');

var words_array = Array.from(words, function(word){
  var text = word.innerText;
  return text;
})

var type_speed = 150, /* The speed/duration of the effect in milliseconds */
    word_hold = 700,
    typing_words = document.getElementById("typing-words");

function typeWriter() {
    if (complete === true) {
      typing_words.innerHTML = '';
      complete = false;
      if (x < words_array.length - 1) {
        x++;
      }
      else {
        x = 0;
      }
      typeWriter();
    }
    else if (i < words_array[x].length) {
      typing_words.innerHTML += words_array[x].charAt(i);
      i++;
      setTimeout(typeWriter, type_speed);
    }
    else if (i === words_array[x].length) {
      i = 0;
      complete = true;
      setTimeout(typeWriter, word_hold);
    } 
}

typeWriter();
