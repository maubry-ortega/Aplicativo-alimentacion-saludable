let selectedGender = null;

function selectGender(element, gender) {
    // Eliminar selección previa
    document.querySelectorAll('.role-button').forEach(button => button.classList.remove('selected'));
    
    // Agregar la clase de selección al botón actual
    element.classList.add('selected');
    selectedGender = gender;

    // Habilitar el botón de confirmar y actualizar el enlace
    const confirmButton = document.getElementById('confirmar-btn');
    confirmButton.classList.remove('disabled');
    confirmButton.disabled = false;

    // Cambiar el href dinámicamente según el género seleccionado
    confirmButton.href = `../../creacio_avatar/index-${gender.toLowerCase()}.html`; // Aquí se asigna el enlace dinámico

    console.log('Género seleccionado:', gender); // Esto es solo para ver si el género se selecciona correctamente
}