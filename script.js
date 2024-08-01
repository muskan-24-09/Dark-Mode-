
let checkbox = document.querySelector('input[type="checkbox"]');
let body = document.body;

checkbox.addEventListener('change', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    body.style.background = 'black';
    body.style.color = '#fff';
    document.querySelector('.slider').style.background = '#666';
    document.querySelector('.slider:before').style.background = '#fff';
  } else {
    body.style.background = '';
    body.style.color = '';
    document.querySelector('.slider').style.background = '';
    document.querySelector('.slider:before').style.background = '';
  }
});