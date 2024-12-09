// Datos de opciones con emojis y estado de bloqueo
const optionsData = {
  hat: {
    hombre: [
      { id: "hat1", emoji: "🎩", locked: false },
      { id: "hat2", emoji: "🧢", locked: false },
      { id: "hat3", emoji: "🎓", locked: true }
    ],
    mujer: [
      { id: "hat1", emoji: "👒", locked: false },
      { id: "hat2", emoji: "🎀", locked: false },
      { id: "hat3", emoji: "🎩", locked: true }
    ]
  },
  head: {
    hombre: [
      { id: "head1", emoji: "🧔", locked: false },
      { id: "head2", emoji: "👨", locked: false },
      { id: "head3", emoji: "👦", locked: true }
    ],
    mujer: [
      { id: "head1", emoji: "👩", locked: false },
      { id: "head2", emoji: "👧", locked: false },
      { id: "head3", emoji: "👵", locked: true }
    ]
  },
  shirt: {
    hombre: [
      { id: "shirt1", emoji: "👕", locked: false },
      { id: "shirt2", emoji: "👔", locked: true },
      { id: "shirt3", emoji: "🧥", locked: false }
    ],
    mujer: [
      { id: "shirt1", emoji: "👗", locked: false },
      { id: "shirt2", emoji: "👚", locked: false },
      { id: "shirt3", emoji: "🧥", locked: true }
    ]
  },
  pants: {
    hombre: [
      { id: "pants1", emoji: "👖", locked: false },
      { id: "pants2", emoji: "🩳", locked: false },
      { id: "pants3", emoji: "👕", locked: true }
    ],
    mujer: [
      { id: "pants1", emoji: "👖", locked: false },
      { id: "pants2", emoji: "🩳", locked: false },
      { id: "pants3", emoji: "👚", locked: true }
    ]
  },
  accessory: {
    hombre: [
      { id: "accessory1", emoji: "🕶️", locked: false },
      { id: "accessory2", emoji: "🎩", locked: true },
      { id: "accessory3", emoji: "🧢", locked: false }
    ],
    mujer: [
      { id: "accessory1", emoji: "🎀", locked: false },
      { id: "accessory2", emoji: "👒", locked: false },
      { id: "accessory3", emoji: "💍", locked: true }
    ]
  }
};

// Función para cargar las opciones de una categoría
function loadOptions(category, gender) {
  const container = document.getElementById("options");
  container.innerHTML = ""; // Limpiar opciones previas

  optionsData[category][gender].forEach(option => {
    const div = document.createElement("div");
    div.className = `option ${option.locked ? "locked" : ""}`;
    div.textContent = option.emoji;

    if (!option.locked) {
      div.onclick = () => selectOption(category, option.emoji);
    }

    container.appendChild(div);
  });
}

// Función para cambiar de categoría
function changeCategory(category) {
  // Resaltar categoría activa
  document.querySelectorAll('.category-button').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.category-button[onclick="changeCategory('${category}')"]`).classList.add('active');

  const gender = window.location.href.includes('mujer') ? 'mujer' : 'hombre';
  loadOptions(category, gender);
}

// Función para seleccionar una opción
function selectOption(category, emoji) {
  document.getElementById(category).textContent = emoji; // Actualizar avatar
  document.getElementById("confirm-btn").classList.remove("disabled"); // Habilitar el botón de confirmar
}

// Función para confirmar el avatar
function confirmAvatar() {
  const avatar = Array.from(document.querySelectorAll('.avatar-part')).map(part => part.textContent).join(" ");
  alert(`¡Avatar confirmado: ${avatar}!`);
}

// Función para restablecer el avatar
function resetAvatar() {
  document.querySelectorAll('.avatar-part').forEach(part => part.textContent = "❓"); // Resetear a estado inicial
  document.getElementById("confirm-btn").classList.add("disabled"); // Deshabilitar confirmar
}

// Inicialización con la categoría inicial y género detectado
const gender = window.location.href.includes('mujer') ? 'mujer' : 'hombre';
loadOptions('hat', gender);