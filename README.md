# Examen 1er trimestre LMSGI

1º de DAM en ESCAV Granada

Nombre: Cristian Gonzalez Gonzalez

Fecha: 21/12/23

## Documentacion

Para la primera sección

```html
section{
    width: 100%;
    background: grey;
    height: 100vh;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

```



Para la segunda sección

```html
    <section id="imagen">
        <h1 id="titulo">Pensativa</h1>
        <img src="https://images.unsplash.com/photo-1700575019340-5ddcc1f4f31d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDMxNTA1NDd8&ixlib=rb-4.0.3&q=85" alt="">
        <h2 id="subtitulo">¿aprobará el examen?</h2>
    </section>

```


Para la tercera sección he usado este código
```html

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
```