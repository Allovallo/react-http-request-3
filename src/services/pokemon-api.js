function fetchPokemon(name) {
  return fetch(`http://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`ERROR! There is no pokemon with name ${name}!!!`));
  });
}

const api = { fetchPokemon };
export default api;
