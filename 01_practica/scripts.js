
  var estado = 0;

  function cambiarTexto() {
    var parrafo = document.getElementById("miParrafo");

    if (estado === 0) {
      parrafo.innerHTML = "Has pulsado el boton";
      estado++
    } else if (estado === 1) {
      parrafo.innerHTML = "Has vuelto a pulsar el boton!";
      estado++
    } else if (estado === 2) {
      parrafo.style.color = "white";
      parrafo.style.background = "black"
      estado++
    } else {
        parrafo.style.color = "black"
        parrafo.style.background = "white"
        parrafo.innerHTML = "Pulsa el boton"
        estado = 0
    }

  }