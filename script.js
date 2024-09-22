// Puedes añadir funcionalidades extra aquí, como un contador de tiempo

// Ejemplo: Mostrar un mensaje al enviar el RSVP
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("¡Gracias por confirmar tu asistencia!");
});

document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('background-music');
    music.play().catch(error => {
        console.log('La reproducción automática fue bloqueada. Haga clic en los controles para reproducir.');
    });

    // Mover los controles
    const audioControls = music.parentElement; // El contenedor de audio
    audioControls.style.marginLeft = '20px'; // Ajusta este valor
});
