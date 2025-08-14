// Función para renderizar las tarjetas de personajes
function renderCharacters(characters) {
    const container = document.getElementById('characters');
    container.innerHTML = ''; // Limpia antes de renderizar

    characters.forEach(character => {
        const card = `
            <div class="col-md-4 col-lg-3 mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="${character.image}" class="card-img-top" alt="${character.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">Estado: ${character.status}</p>
                        <p class="card-text">Especie: ${character.species}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Inicializa la app
async function initApp() {
    const characters = await getCharacters();
    renderCharacters(characters);
}

// Ejecuta la aplicación
initApp();
