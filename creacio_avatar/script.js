const optionsData = {
    hair: [
        { id: "hair1", emoji: "💇‍♂️", locked: false },
        { id: "hair2", emoji: "💇‍♀️", locked: true },
        { id: "hair3", emoji: "👩‍🎤", locked: false }
    ],
    skin: [
        { id: "skin1", emoji: "🧑", locked: false },
        { id: "skin2", emoji: "🧔", locked: false }
    ],
    shirt: [
        { id: "shirt1", emoji: "👕", locked: false },
        { id: "shirt2", emoji: "👔", locked: true }
    ],
    pants: [
        { id: "pants1", emoji: "👖", locked: false },
        { id: "pants2", emoji: "🩳", locked: false }
    ],
    accessory: [
        { id: "accessory0", emoji: "👒", locked: false },
        { id: "accessory1", emoji: "🕶️", locked: false },
        { id: "accessory2", emoji: "🎩", locked: true }
    ]
};

let currentCategory = "hair";

const loadOptions = (category) => {
    currentCategory = category;
    const container = document.getElementById("options");
    container.innerHTML = "";

    optionsData[category].forEach(option => {
        const div = document.createElement("div");
        div.className = `option ${option.locked ? "locked" : ""}`;
        div.innerHTML = option.emoji;

        if (!option.locked) {
            div.onclick = () => selectOption(category, option.emoji);
        }
        container.appendChild(div);
    });

    updateActiveCategory();
}

const selectOption = (category, emoji) => {
    document.getElementById(category).innerHTML = emoji;
}

const updateActiveCategory = () => {
    document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.category-btn[onclick="changeCategory('${currentCategory}')"]`).classList.add("active");
}

const confirmAvatar = () => {
    alert("Avatar confirmado: " +
        `Pelo: ${document.getElementById("hair").innerHTML}, ` +
        `Piel: ${document.getElementById("skin").innerHTML}, ` +
        `Camisa: ${document.getElementById("shirt").innerHTML}, ` +
        `Pantalones: ${document.getElementById("pants").innerHTML}, ` +
        `Accesorio: ${document.getElementById("accessory").innerHTML}`);
}

const resetAvatar = () => {
    for (let category in optionsData) {
        document.getElementById(category).innerHTML = optionsData[category][0].emoji;
    }
}

const changeCategory = (category) => {
    loadOptions(category);
}

// Cargar opciones iniciales
loadOptions("hair");