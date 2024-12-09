let selectedGender = null;

function selectGender(element, gender) {
  // Quita la clase "selected" de todos los botones
  document.querySelectorAll('.role-button').forEach(button => button.classList.remove('selected'));

  // Marca el botón seleccionado
  element.classList.add('selected');
  selectedGender = gender;

  // Habilita el botón de confirmar
  const confirmButton = document.getElementById('confirmar-btn');
  confirmButton.classList.remove('disabled');
  confirmButton.href = `../../creacion_avatar/${gender.toLowerCase()}.html`; // Redirige dinámicamente

  console.log('Género seleccionado:', gender); // Consola para depuración
}