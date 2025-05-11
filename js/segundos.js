function mostrarMensajesCada15s() {
  const mensajes = document.querySelectorAll(".overlay-text");

  setInterval(() => {
    mensajes.forEach(mensaje => {
      mensaje.style.opacity = "1";
    });

    setTimeout(() => {
      mensajes.forEach(mensaje => {
        mensaje.style.opacity = "0";
      });
    }, 3000); // visible 3 segundos

  }, 15000); // cada 15 segundos
}

mostrarMensajesCada15s();