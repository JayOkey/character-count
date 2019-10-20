const text = document.querySelector('#text');
const count = document.querySelector('#character-count');

text.addEventListener('keyup', () => count.textContent = text.textLength, false);