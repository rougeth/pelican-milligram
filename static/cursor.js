function blinking_cursor() {
  var cursor = document.querySelector('header span');
  setInterval(function() {
    cursor.style.visibility = 'hidden';
    setTimeout(function() {
      cursor.style.visibility = '';
    }, 500);
  }, 1000);
}

window.onload = blinking_cursor;
