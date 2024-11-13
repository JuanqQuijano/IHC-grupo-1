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




const cameraSection = document.getElementById("cameraSection");
const avatarSection = document.getElementById("avatarSection");
const avatarImage = document.getElementById("avatarImage");

function tomarFoto() {
  
  avatarImage.src = document.getElementById("cameraPreview").src;
  
  // Oculta la sección de la cámara y muestra la de personalización
  cameraSection.classList.remove("visible");
  avatarSection.classList.add("visible");
}


document.getElementById("color").addEventListener("input", (e) => {
  avatarImage.style.filter = `sepia(1) saturate(2) hue-rotate(${e.target.value})`;
});


document.getElementById("profundidad").addEventListener("input", (e) => {
  let depth = e.target.value;
  avatarImage.style.filter = `brightness(${1 + depth / 100})`;
});

document.getElementById("tamano").addEventListener("input", (e) => {
  let size = e.target.value;
  avatarImage.style.transform = `scale(${1 + size / 100})`;
});

document.getElementById("estiramiento").addEventListener("input", (e) => {
  let stretch = e.target.value;
  avatarImage.style.transform = `scale(${1 + stretch / 100}, ${1 + stretch / 100})`;
});

function resetAvatar() {
  document.getElementById("profundidad").value = 50;
  document.getElementById("color").value = "#f4c2c2";
  document.getElementById("tamano").value = 50;
  document.getElementById("estiramiento").value = 50;
  avatarImage.style.filter = "none";
  avatarImage.style.transform = "scale(1, 1)";
}




const avatarPreview = document.getElementById("avatarPreview");

    function toggleAccessory(accessory) {
      let accessoryElement = document.getElementById(accessory);

      
      if (accessoryElement) {
        avatarPreview.removeChild(accessoryElement);
      } else {
        
        accessoryElement = document.createElement("img");
        accessoryElement.src = `https://img.icons8.com/emoji/48/000000/${accessory}.png`;
        accessoryElement.id = accessory;
        accessoryElement.style.position = "absolute";
        accessoryElement.style.top = "20%";
        accessoryElement.style.left = "25%";
        accessoryElement.style.width = "100px";
        accessoryElement.style.zIndex = 1;
        avatarPreview.appendChild(accessoryElement);
      }
    }

    function saveAvatar() {
      alert("Avatar guardado con los accesorios seleccionados.");
    }
