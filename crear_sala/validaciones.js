function validarFormulario() {
    // Obtener valores
    const participantes = document.getElementById('participantes').value.trim();
    const clase = document.getElementById('clase').value.trim();
    const tema = document.getElementById('tema').value;

    // Referencias a mensajes de error
    const errorParticipantes = document.getElementById('error-participantes');
    const errorClase = document.getElementById('error-clase');
    const errorTema = document.getElementById('error-tema');

    // Bandera para saber si hay errores
    let hayErrores = false;

    // Resetear mensajes de error
    errorParticipantes.textContent = '';
    errorClase.textContent = '';
    errorTema.textContent = '';

    // Validación de participantes
    if (!participantes || participantes <= 0 || participantes > 20) {
        errorParticipantes.textContent = 'La cantidad de participantes debe ser entre 1 y 20.';
        hayErrores = true;
    }

    // Validación de nombre de la clase
    if (!clase || clase.length < 3) {
        errorClase.textContent = 'El nombre de la clase debe tener al menos 3 caracteres.';
        hayErrores = true;
    }

    // Validación de tema
    if (!tema) {
        errorTema.textContent = 'Por favor, seleccione un tema.';
        hayErrores = true;
    }

    return !hayErrores;
}

// Asignar evento al botón "Siguiente"
document.getElementById('boton-siguiente').addEventListener('click', function(event) {
    if (!validarFormulario()) {
        event.preventDefault(); // Evita la acción predeterminada del enlace
    }
});

// Asignar eventos para actualizar las validaciones en tiempo real
document.getElementById('participantes').addEventListener('input', validarFormulario);
document.getElementById('clase').addEventListener('input', validarFormulario);
document.getElementById('tema').addEventListener('change', validarFormulario);
