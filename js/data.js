// Función para obtener los datos desde la API
async function getCharacters() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        return data.results; // Retorna el arreglo de personajes
    } catch (error) {
        console.error('Error al obtener personajes:', error);
        return [];
    }
}
