document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('.formulario form');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente
        
        // Mostrar mensaje de confirmación
        if (confirm('¿Estás seguro de que deseas enviar el formulario?')) {
            // Aquí puedes agregar código adicional para enviar el formulario
            alert('¡Formulario enviado con éxito!');
            // Por ejemplo, puedes usar AJAX para enviar los datos del formulario al servidor
        }
    });
});
