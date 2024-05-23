document.addEventListener('DOMContentLoaded', function() {
    // Mostrar la ventana emergente después de 5 segundos
    var popup = document.getElementById('popup');
    var closeBtn = document.querySelector('.close');

    setTimeout(function() {
        popup.style.display = 'block';
    }, 5000);

    // Cerrar la ventana emergente cuando se hace clic en la "x"
    closeBtn.onclick = function() {
        popup.style.display = 'none';
    }

    // Cerrar la ventana emergente cuando se hace clic fuera de ella
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
});