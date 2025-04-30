document.addEventListener('DOMContentLoaded' , function(){
    const form = document.getElementById('form');
    const formSection = document.getElementById('form-section');
    const success = document.getElementById('success'); 

    form.addEventListener('submit' , function(event){
        event.preventDefault();

        formSection.style.display = 'none';
        success.style.display = 'block';

        setTimeout(function() {
            location.reload();
        }, 3000)
    })
});


const input = document.getElementById('email');
const errorMsg = document.querySelector('.error');
const form = document.getElementById('form');

const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


input.addEventListener('input', () => {
  if (pattern.test(input.value)) {
    errorMsg.style.display = 'none';
    input.style.border = '';
    input.style.backgroundColor = '';
    input.style.color = '';
  } else {
    errorMsg.style.display = 'block';
    input.style.border = '2px solid red';
    input.style.backgroundColor = 'hsla(4, 100%, 67%, 0.5)';
    input.style.color = 'red';
  }
});

form.addEventListener('submit', (e) => {
    if (!pattern.test(input.value)) {
      errorMsg.style.display = 'block';
      input.style.border = '2px solid red';
      input.style.backgroundColor = 'hsla(4, 100%, 67%, 0.5)';
      input.style.color = 'red';
      e.preventDefault();
    } else {

    }
  });
