const form =document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});
function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  validateForm()
  function validateForm() {
    const input = document.getElementById('email');
    const inputValve = emailInput.value

    if (!validateEmail(inputValve)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }
 form.addEventListener("submit",function(lala) {
    lala.preventDefault()
    validateForm();
 })