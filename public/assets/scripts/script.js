function enviarMensaje() {
    // 
    const mensajeInput = document.getElementById('mensaje-input');
    const mensajeTexto = mensajeInput.value.trim();

    // Si el texto está vacio, no enviará nada
    if (mensajeTexto !== '') {
        // Crear un nuevo contenedor para el mensaje propio
        const nuevoMensaje = document.createElement('div');
        nuevoMensaje.classList.add('mensaje-propio');

        // Crear el párrafo que contendrá el texto del mensaje
        const mensajeParrafo = document.createElement('p');
        mensajeParrafo.textContent = mensajeTexto;

        // Añadir el párrafo al contenedor del nuevo mensaje
        nuevoMensaje.appendChild(mensajeParrafo);

     
        const mensajesContainer = document.getElementById('mensajes');
        
        if (!mensajesContainer) {
            console.error("Contenedor de mensajes no encontrado");
            return;
        }

        mensajesContainer.appendChild(nuevoMensaje);
        console.log("Mensaje enviado:", mensajeTexto);

      
        mensajeInput.value = '';

        // Desplazar al mandar un mensaje
        mensajesContainer.scrollTop = mensajesContainer.scrollHeight;
    } else {
        console.log("El campo de mensaje está vacío.");
    }
}


// Función para ocultar o mostrar solo los íconos inferiores
function toggleMenu() {
    const menuOpciones = document.querySelector(".menu-opciones");
    
    if (menuOpciones) {
        menuOpciones.classList.toggle("oculto");
    }
}

// Event listener para el botón del menú
document.querySelector(".menu-barra button").addEventListener("click", toggleMenu);
