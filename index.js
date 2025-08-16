const form = document.getElementById('form');
const formSection = document.getElementById('form-section');
const success = document.getElementById('success');
const input = document.getElementById('email');
const errorMsg = document.querySelector('.error');
const hideBtn = document.getElementById('hide-msg');
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!pattern.test(input.value) || input.value.trim().length < 1) {
    errorMsg.style.display = 'block';
    input.style.border = '2px solid red';
    input.style.backgroundColor = 'hsla(4, 100%, 67%, 0.5)';
    input.style.color = 'red';
  } else {
    errorMsg.classList.add("none");
    formSection.classList.add("none");
    success.classList.remove("none");

    input.value = '';
  }
});

hideBtn.addEventListener('click', function() {
  success.classList.add("none");
  formSection.classList.remove("none");
});
