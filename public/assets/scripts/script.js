const chats = {
    1: {
        nombre: "Anna",
        mensajes: [
            { tipo: "otro", texto: "Oye Francisco, estas?" },
            { tipo: "otro", texto: "Ya terminaste tu parte del trabajo?" },
            { tipo: "propio", texto: "..." }
        ]
    },
    2: {
        nombre: "Luis",
        mensajes: [
            { tipo: "otro", texto: "Hola! ¿Cómo estás?" },
            { tipo: "propio", texto: "Bien, gracias!" }
        ]
    },
    3: {
        nombre: "Maria",
        mensajes: [
            { tipo: "otro", texto: "Buenos días!" },
            { tipo: "propio", texto: "Buenos días, ¿cómo estás?" }
        ]
    },
    4: {
        nombre: "Carlos",
        mensajes: [
            { tipo: "otro", texto: "Vamos a la reunión?" },
            { tipo: "propio", texto: "Sí, en 5 minutos" }
        ]
    },
    5: {
        nombre: "Sofía",
        mensajes: [
            { tipo: "otro", texto: "Qué planes para hoy?" },
            { tipo: "propio", texto: "No estoy seguro, ¿alguna idea?" }
        ]
    }
};


let chatActual = null; 

function cambiarChat(idChat) {
    const chat = chats[idChat];
    chatActual = idChat;
    const nombreChat = document.getElementById('nombre-chat');
    const mensajesContainer = document.getElementById('mensajes');
    const mensajeVacio = document.getElementById('mensaje-vacio');

    if (chat) {
        nombreChat.textContent = chat.nombre;

       
        mensajesContainer.innerHTML = '';
        if (mensajeVacio) {
            mensajeVacio.style.display = 'none';
        }

        
        chat.mensajes.forEach(mensaje => {
            const nuevoMensaje = document.createElement('div');
            nuevoMensaje.classList.add(mensaje.tipo === 'propio' ? 'mensaje-propio' : 'mensaje-otro');

            const mensajeParrafo = document.createElement('p');
            mensajeParrafo.textContent = mensaje.texto;
            nuevoMensaje.appendChild(mensajeParrafo);

            mensajesContainer.appendChild(nuevoMensaje);
        });
    }
}

function enviarMensaje() {
    const mensajeInput = document.getElementById('mensaje-input');
    const mensajeTexto = mensajeInput.value.trim();

    if (mensajeTexto !== '') {
        const nuevoMensaje = document.createElement('div');
        nuevoMensaje.classList.add('mensaje-propio');

        const mensajeParrafo = document.createElement('p');
        mensajeParrafo.textContent = mensajeTexto;

        nuevoMensaje.appendChild(mensajeParrafo);

        const mensajesContainer = document.getElementById('mensajes');
        mensajesContainer.appendChild(nuevoMensaje);

        mensajeInput.value = '';
        mensajesContainer.scrollTop = mensajesContainer.scrollHeight;

        
        responderAutomaticamente();
    } else {
        console.log("El campo de mensaje está vacío.");
    }
}

function responderAutomaticamente() {
    
    setTimeout(() => {
        const respuesta = generarRespuesta(); // Genera una respuesta de ejemplo

        const mensajeRespuesta = document.createElement('div');
        mensajeRespuesta.classList.add('mensaje-otro');

        const mensajeParrafo = document.createElement('p');
        mensajeParrafo.textContent = respuesta;
        mensajeRespuesta.appendChild(mensajeParrafo);

        const mensajesContainer = document.getElementById('mensajes');
        mensajesContainer.appendChild(mensajeRespuesta);

        mensajesContainer.scrollTop = mensajesContainer.scrollHeight;
    }, 1000); // 1 segundo de retraso
}

function generarRespuesta() {
    
    const respuestas = [
        "Estoy aquí para ayudarte.",
        "¿Podrías darme más detalles?",
        "Entendido.",
        "Déjame revisarlo rápidamente.",
        "¿Hay algo más en lo que te pueda ayudar?"
    ];
    
    return respuestas[Math.floor(Math.random() * respuestas.length)];
}
