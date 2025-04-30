const input = document.getElementById('email');
const errorMsg = document.querySelector('.error');
const form = document.getElementById('form');

const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



document.addEventListener('DOMContentLoaded' , function(){
    const form = document.getElementById('form');
    const formSection = document.getElementById('form-section');
    const success = document.getElementById('success'); 

    form.addEventListener('submit' , function(event){
        event.preventDefault();
        if (pattern.test(input.value) && input.value.lenght < 1) {
          errorMsg.style.display = 'none';
          input.style.border = '';
          input.style.backgroundColor = '';
          input.style.color = '';
        } else {
          formSection.style.display = 'none';
          success.style.display = 'block';
  
          setTimeout(function() {
              location.reload();
          }, 3000)
        }

    })
});

