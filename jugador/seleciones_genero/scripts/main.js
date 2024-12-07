let selectedGender = null;

function selectGender(element, gender) {
    // Eliminar selección previa
    document.querySelectorAll('.role-button').forEach(button => button.classList.remove('selected'));
    
    // Agregar la clase de selección al botón actual
    element.classList.add('selected');
    selectedGender = gender;

    const confirmButton = document.getElementById('confirmar-btn');
    confirmButton.classList.remove('disabled');
    confirmButton.disabled = false;
}

document.getElementById('confirmar-btn').addEventListener('click', function (event) {
    if (!selectedGender) {
        event.preventDefault();
    }
});