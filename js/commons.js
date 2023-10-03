document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento del pop-up
    const popup = document.getElementById('popup');
    // Obtener el elemento del botón de envío de valoración
    const ratingSubmitButton = document.getElementById('rating-submit');
  
    // Función para mostrar el pop-up
    function showPopup() {
      popup.classList.add('active');
    }
  
    // Función para ocultar el pop-up
    function hidePopup() {
      popup.classList.remove('active');
    }
  
    // Temporizador de 5 segundos
    setTimeout(showPopup, 5000);
  
    // Evento de clic en el botón de envío de valoración
    ratingSubmitButton.addEventListener('click', () => {
      const ratingInput = document.getElementById('rating-input');
      const rating = ratingInput.value;
  
      // Realizar acciones con la valoración recibida, por ejemplo, enviarla al servidor
  
      hidePopup();
    });
  });

  

  function validarFormulario() {
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("phone").value;
    var mensaje = document.getElementById("message").value;

    // Validación del nombre
    if (nombre.length > 20) {
      alert("El nombre debe tener máximo 20 caracteres.");
      return false;
    }

    // Validación del correo electrónico
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (!emailRegex.test(email)) {
      alert("El correo electrónico no tiene un formato válido.");
      return false;
    }

    // Validación del teléfono
    var telefonoRegex = /^\d{9,11}$/;
    if (!telefonoRegex.test(telefono)) {
      alert("El teléfono debe ser numérico y tener entre 9 y 11 dígitos.");
      return false;
    }

    // Validación del mensaje
    if (mensaje.length > 200) {
      alert("El mensaje debe tener máximo 200 caracteres.");
      return false;
    }

    // Si todas las validaciones son exitosas, el formulario se envía
    return true;
  }