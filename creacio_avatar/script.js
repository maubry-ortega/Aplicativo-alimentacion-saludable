const optionsData = {  
  hat: {
    hombre: [
      { id: "hat1", emoji: "🎩", locked: true },
      { id: "hat2", emoji: "🧢", locked: false },
      { id: "hat3", emoji: "🎓", locked: true },
      { id: "hat4", emoji: "🧣", locked: false },  // Bufanda (estilo invierno)
      { id: "hat5", emoji: "👒", locked: false },   // Sombrero de ala ancha
      { id: "hat6", emoji: "👑", locked: true },    // Corona
      { id: "hat7", emoji: "🎀", locked: false },   // Moño
      { id: "hat8", emoji: "🧢", locked: true },    // Gorra deportiva
      { id: "hat9", emoji: "🦄", locked: false }    // Sombrero de unicornio
    ],
    mujer: [
      { id: "hat1", emoji: "👒", locked: true },
      { id: "hat2", emoji: "🎀", locked: false },
      { id: "hat3", emoji: "🎩", locked: true },
      { id: "hat4", emoji: "🧣", locked: false },  // Bufanda (estilo invierno)
      { id: "hat5", emoji: "👑", locked: false },   // Corona (estilo elegante)
      { id: "hat6", emoji: "🎀", locked: true },   // Moño
      { id: "hat7", emoji: "🧢", locked: false },   // Gorro deportivo
      { id: "hat8", emoji: "🎩", locked: false },   // Sombrero clásico
      { id: "hat9", emoji: "🦄", locked: true }    // Sombrero de unicornio
    ]
  },
  head: {
    hombre: [
      { id: "head1", emoji: "🧔", locked: true },
      { id: "head2", emoji: "👨", locked: false },
      { id: "head3", emoji: "👦", locked: true },
      { id: "head4", emoji: "🧑‍🦱", locked: false },  // Hombre de cabello rizado
      { id: "head5", emoji: "👴", locked: false },    // Hombre mayor
      { id: "head6", emoji: "👨‍🦳", locked: true },  // Hombre con cabello gris
      { id: "head7", emoji: "🧑‍🦰", locked: false },  // Hombre con cabello rojo
      { id: "head8", emoji: "👨‍🦲", locked: false },  // Hombre calvo
      { id: "head9", emoji: "👱‍♂️", locked: true }  // Hombre de cabello rubio
    ],
    mujer: [
      { id: "head1", emoji: "👩", locked: true },
      { id: "head2", emoji: "👧", locked: false },
      { id: "head3", emoji: "👵", locked: true },
      { id: "head4", emoji: "👩‍🦳", locked: false }, // Mujer con cabello blanco
      { id: "head5", emoji: "👩‍🦰", locked: false },  // Mujer con cabello rojo
      { id: "head6", emoji: "👩‍🦱", locked: true },  // Mujer de cabello rizado
      { id: "head7", emoji: "👩‍🦯", locked: false },  // Mujer con cabello rizado y rubio
      { id: "head8", emoji: "👧", locked: false },     // Mujer joven
      { id: "head9", emoji: "👩‍🦳", locked: true }   // Mujer con cabello blanco
    ]
  },
  shirt: {
    hombre: [
      { id: "shirt1", emoji: "👕", locked: false },
      { id: "shirt2", emoji: "👔", locked: true },
      { id: "shirt3", emoji: "🧥", locked: false },
      { id: "shirt4", emoji: "🧸", locked: true },  // Camiseta con estampado
      { id: "shirt5", emoji: "🦋", locked: false },   // Camisa con estampado artístico
      { id: "shirt6", emoji: "👕", locked: true },   // Camiseta básica
      { id: "shirt7", emoji: "🧢", locked: false },   // Camiseta con gorra
      { id: "shirt8", emoji: "🦄", locked: true },   // Camiseta con unicornio
      { id: "shirt9", emoji: "👚", locked: false }    // Blusa femenina
    ],
    mujer: [
      { id: "shirt1", emoji: "👗", locked: false },
      { id: "shirt2", emoji: "👚", locked: true },
      { id: "shirt3", emoji: "🧥", locked: true },
      { id: "shirt4", emoji: "👚", locked: false },  // Blusa de manga larga
      { id: "shirt5", emoji: "👙", locked: false },   // Blusa de playa
      { id: "shirt6", emoji: "👕", locked: true },   // Camiseta básica
      { id: "shirt7", emoji: "🧸", locked: false },   // Camiseta con estampado
      { id: "shirt8", emoji: "🎀", locked: false },   // Blusa con lazo
      { id: "shirt9", emoji: "👗", locked: true }    // Vestido elegante
    ]
  },
  pants: {
    hombre: [
      { id: "pants2", emoji: "🩳", locked: true },
      { id: "pants3", emoji: "👕", locked: false },
      { id: "pants4", emoji: "👖", locked: true },  // Jeans rotos
      { id: "pants5", emoji: "🩳", locked: false },   // Pantalones cortos (tipo bermuda)
      { id: "pants6", emoji: "🧳", locked: true },   // Pantalones deportivos
      { id: "pants8", emoji: "👖", locked: false },   // Pantalones formales
      { id: "pants9", emoji: "🦸", locked: true }    // Pantalones de superhéroe
    ],
    mujer: [
      { id: "pants1", emoji: "👖", locked: false },
      { id: "pants2", emoji: "🩳", locked: true },
      { id: "pants3", emoji: "👚", locked: false },
      { id: "pants4", emoji: "👗", locked: true },  // Falda larga
      { id: "pants5", emoji: "👢", locked: false },   // Pantalón de cuero
      { id: "pants6", emoji: "👖", locked: true },   // Pantalones de mezclilla
      { id: "pants7", emoji: "🩱", locked: false },   // Pantalones deportivos
      { id: "pants8", emoji: "🩳", locked: false },   // Pantalones cortos
      { id: "pants9", emoji: "👚", locked: true }    // Falda corta
    ]
  },
  accessory: {
    hombre: [
      { id: "accessory1", emoji: "🕶️", locked: true },
      { id: "accessory2", emoji: "🎧", locked: false },  // Auriculares
      { id: "accessory3", emoji: "🧣", locked: false },   // Bufanda
      { id: "accessory4", emoji: "📱", locked: true },   // Teléfono móvil
      { id: "accessory5", emoji: "💼", locked: false },   // Maletín
      { id: "accessory6", emoji: "📸", locked: false },   // Cámara fotográfica
      { id: "accessory7", emoji: "🎮", locked: true },   // Consola de videojuegos
      { id: "accessory8", emoji: "💍", locked: false },   // Anillo
      { id: "accessory9", emoji: "⌚", locked: true }    // Reloj de pulsera
    ],
    mujer: [
      { id: "accessory1", emoji: "🎀", locked: false },
      { id: "accessory2", emoji: "💍", locked: true },   // Anillo
      { id: "accessory3", emoji: "💄", locked: false },   // Pintalabios
      { id: "accessory4", emoji: "👜", locked: true },   // Bolso elegante
      { id: "accessory5", emoji: "👒", locked: false },   // Sombrero elegante
      { id: "accessory6", emoji: "👗", locked: false },   // Vestido elegante
      { id: "accessory7", emoji: "🎩", locked: true },   // Sombrero de alta costura
      { id: "accessory8", emoji: "📱", locked: false },   // Teléfono móvil
      { id: "accessory9", emoji: "🧣", locked: true }    // Bufanda elegante
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