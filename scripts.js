var i = 0,
    x = 0,
    complete = false;

var words = document.querySelectorAll('.word');

var words_array = Array.from(words, function(word){
  var text = word.innerText;
  return text;
})

var type_speed = 150,
    word_hold = 2500,
    cursor_speed = 530,
    typing_words = document.getElementById("typing-words"),
    cursor = document.getElementById("cursor");

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
    if (cursor.classList.contains('hidden')) {
      cursor.classList.remove('hidden');
    };
    typing_words.innerHTML += words_array[x].charAt(i);
    set_time_out('blink', blinkingCursor, cursor_speed);
    i++;
    setTimeout(typeWriter, type_speed);
  }
  else if (i === words_array[x].length) {
    i = 0;
    complete = true;
    setTimeout(typeWriter, word_hold);
  } 
}

function blinkingCursor() {
  cursor.classList.toggle('hidden');
  set_time_out('blink', blinkingCursor, cursor_speed);
}

var timeout_handles = []

function set_time_out(id, code, time) {
  if (id in timeout_handles) {
    clearTimeout(timeout_handles[id])
  }
  timeout_handles[id] = setTimeout(code, time)
}

blinkingCursor();
typeWriter();

