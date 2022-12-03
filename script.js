let app =  document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop: true, // bucle de eventos
    delay: 75, // tiempo que toma el caracter para aparecer en el DOM
});

typewriter
    .pauseFor(2500) // Agrega evento de pausa a la cola por milisegundos
    .typeString('Mi nombre es Nadia y estoy participando en un programa para programacion') // Agrega los caracteres de la cola de la cadena
    .pauseFor(200)
    .deleteChars(10) // Borra los caracteres de la cola de la cadena
    .start(); // inicia el bucle de eventos