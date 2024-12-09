const optionsData = { 
  hat: {
    hombre: [
      { id: "hat1", emoji: "🎩", locked: false },
      { id: "hat2", emoji: "🧢", locked: false },
      { id: "hat3", emoji: "🎓", locked: true },
      { id: "hat4", emoji: "🧣", locked: false },  // Bufanda (estilo invierno)
      { id: "hat5", emoji: "👒", locked: false }   // Sombrero de ala ancha
    ],
    mujer: [
      { id: "hat1", emoji: "👒", locked: false },
      { id: "hat2", emoji: "🎀", locked: false },
      { id: "hat3", emoji: "🎩", locked: true },
      { id: "hat4", emoji: "🧣", locked: false },  // Bufanda (estilo invierno)
      { id: "hat5", emoji: "👑", locked: false }   // Corona (estilo elegante)
    ]
  },
  head: {
    hombre: [
      { id: "head1", emoji: "🧔", locked: false },
      { id: "head2", emoji: "👨", locked: false },
      { id: "head3", emoji: "👦", locked: true },
      { id: "head4", emoji: "🧑‍🦱", locked: false },  // Hombre de cabello rizado
      { id: "head5", emoji: "👴", locked: false }    // Hombre mayor
    ],
    mujer: [
      { id: "head1", emoji: "👩", locked: false },
      { id: "head2", emoji: "👧", locked: false },
      { id: "head3", emoji: "👵", locked: true },
      { id: "head4", emoji: "👩‍🦳", locked: false }, // Mujer con cabello blanco
      { id: "head5", emoji: "👩‍🦰", locked: false }  // Mujer con cabello rojo
    ]
  },
  shirt: {
    hombre: [
      { id: "shirt1", emoji: "👕", locked: false },
      { id: "shirt2", emoji: "👔", locked: true },
      { id: "shirt3", emoji: "🧥", locked: false },
      { id: "shirt4", emoji: "🧸", locked: false },  // Camiseta con estampado
      { id: "shirt5", emoji: "🦋", locked: false }   // Camisa con estampado artístico
    ],
    mujer: [
      { id: "shirt1", emoji: "👗", locked: false },
      { id: "shirt2", emoji: "👚", locked: false },
      { id: "shirt3", emoji: "🧥", locked: true },
      { id: "shirt4", emoji: "👚", locked: false },  // Blusa de manga larga
      { id: "shirt5", emoji: "👙", locked: false }   // Blusa de playa
    ]
  },
  pants: {
    hombre: [
      { id: "pants1", emoji: "👖", locked: false },
      { id: "pants2", emoji: "🩳", locked: false },
      { id: "pants3", emoji: "👕", locked: true },
      { id: "pants4", emoji: "👖", locked: false },  // Jeans rotos
      { id: "pants5", emoji: "🧳", locked: false }   // Pantalones deportivos
    ],
    mujer: [
      { id: "pants1", emoji: "👖", locked: false },
      { id: "pants2", emoji: "🩳", locked: false },
      { id: "pants3", emoji: "👚", locked: true },
      { id: "pants4", emoji: "👗", locked: false },  // Falda larga
      { id: "pants5", emoji: "👢", locked: false }   // Pantalón de cuero
    ]
  },
  accessory: {
    hombre: [
      { id: "accessory1", emoji: "🕶️", locked: false },
      { id: "accessory2", emoji: "🎧", locked: false },  // Auriculares
      { id: "accessory3", emoji: "🧣", locked: false },   // Bufanda
      { id: "accessory4", emoji: "📱", locked: false },   // Teléfono móvil
      { id: "accessory5", emoji: "💼", locked: false }    // Maletín
    ],
    mujer: [
      { id: "accessory1", emoji: "🎀", locked: false },
      { id: "accessory2", emoji: "💍", locked: true },   // Anillo
      { id: "accessory3", emoji: "👗", locked: false },  // Collar de perlas
      { id: "accessory4", emoji: "👜", locked: false },   // Bolso elegante
      { id: "accessory5", emoji: "💄", locked: false }    // Pintalabios
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
// function confirmAvatar() {
//   const avatar = Array.from(document.querySelectorAll('.avatar-part')).map(part => part.textContent).join(" ");
//   alert(`¡Avatar confirmado: ${avatar}!`);
// }

// Función para restablecer el avatar
function resetAvatar() {
  document.querySelectorAll('.avatar-part').forEach(part => part.textContent = "❓"); // Resetear a estado inicial
  document.getElementById("confirm-btn").classList.add("disabled"); // Deshabilitar confirmar
}

// Inicialización con la categoría inicial y género detectado
const gender = window.location.href.includes('mujer') ? 'mujer' : 'hombre';
loadOptions('hat', gender);