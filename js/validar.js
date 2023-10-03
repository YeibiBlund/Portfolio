function validarFormulario() {
    //Obtener los elementos del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var usuario = document.getElementById('usuario').value;
    var clave = document.getElementById('clave').value;

    // Validar que no haya campos nulos
    if (nombre === "" || apellido === "" || correo === "" || usuario === "" || clave === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    //Validar los valores ingresados en cada campo
    if (nombre.length > 18) {
        alert('El nombre debe tener menos de 19 caracteres');
        return false;
    }

    if (apellido.length > 30) {
        alert('Los apellidos deben tener menos de 31 caracteres');
        return false;
    }

    if (!validarCorreo(correo)) {
        alert('Ingrese un correo electrónico válido');
        return false;
    }

    if (usuario.length > 19) {
        alert('El usuario debe tener menos de 20 caracteres');
        return false;
    }

    if (!esAlfanumerico(clave)) {
        alert('La contraseña debe ser alfanumérica');
        return false;
    }

    //Si todos los campos son válidos, se envía el formulario
    alert('Usuario añadido');
    return true;
}

//Función para validar el correo electrónico
function validarCorreo(correo) {
    var expresion = /\w+@\w+\.\w+/;
    return expresion.test(correo);
}

//Función para validar si una cadena es alfanumérica
function esAlfanumerico(cadena) {
    var expresion = /^[0-9a-zA-Z]+$/;
    return expresion.test(cadena);
}

function mostrarFormulario() {
    var formulario = document.getElementById("form-registro");
    var botonRegistro = document.getElementById("btn-registro");
    
    if (formulario.style.display === "none") {
      formulario.style.display = "block";
      botonRegistro.style.display = "none";
      document.querySelector('.login-box').style.display = 'none';
    } else {
      formulario.style.display = "none";
      botonRegistro.style.display = "block";
      document.querySelector('.login-box').style.display = 'block';
    }
  }

  function descargarCV() {
    var url = "img/Bd twitter.pptx";
    var a = document.createElement('a');
    a.href = url;
    a.download = url.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    return false;
  }
  
  window.onload = function() {
    document.getElementById("descargar-cv").onclick = descargarCV;
  };

  
  
  
  
  
  
  