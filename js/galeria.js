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

  document.addEventListener('DOMContentLoaded', function () {
    // Obtener el video y el elemento h1
    var video = document.getElementById("video-fondo");
    var h1Element = document.querySelector(".jb-dev");
  
    // Configurar la lista de videos
    var videos = ["img/Video Fondo.mp4", "img/video-fondo2.mp4", "img/video-fondo3.mp4"];
  
    // Variable para mantener el índice del video actual
    var indiceVideoActual = 0;
  
    // Función para cambiar la fuente del video cuando se presiona el h1
    function cambiarVideo() {
      indiceVideoActual = (indiceVideoActual + 1) % videos.length;
      video.setAttribute("src", videos[indiceVideoActual]);
    }
  
    // Agregar un evento de clic al elemento h1
    h1Element.addEventListener("click", cambiarVideo);
  });


  setInterval(function () {
    var phoneIcon = document.getElementById("phone-icon");
    phoneIcon.classList.toggle("pulsate");
  }, 3000);