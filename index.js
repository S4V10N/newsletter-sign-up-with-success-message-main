const form = document.getElementById('form');
const formSection = document.getElementById('form-section');
const success = document.getElementById('success');
const input = document.getElementById('email');
const errorMsg = document.querySelector('.error');
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit' , function(event) {
  event.preventDefault();
  if (!pattern.test(input.value) ?? input.value.length < 1) {
    errorMsg.style.display = 'block';
    input.style.border = '2px solid red';
    input.style.backgroundColor = 'hsla(4, 100%, 67%, 0.5)';
    input.style.color = 'red'
  } else {
    formSection.style.display = 'none';
    success.style.display = 'block';
  }
})