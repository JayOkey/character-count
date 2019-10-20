var text = document.querySelector('#text');
var count = document.querySelector('#character-count');

text.addEventListener('keyup', function() {
  count.textContent = text.textLength;
}, false);