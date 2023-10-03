function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
  } else {
      document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var latitud = position.coords.latitude;
  var longitud = position.coords.longitude;
  document.getElementById("demo").innerHTML = "Latitud: " + latitud +
      "<br>Longitud: " + longitud;
  var mymap = L.map('mapid').setView([latitud, longitud], 18);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 23,
  }).addTo(mymap);
}

getLocation();

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