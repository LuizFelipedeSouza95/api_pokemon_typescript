import axios from 'axios';

async function updated() {

  const url = `http://${process.env.DATA_BASE_HOST}:${process.env.PORT}/editarPokemon`

  const body = {
    id_pokemon: 2,
    nome_pokemon: 'Ivysaur',
    tipo_pokemon: 'grass',
    fraqueza_pokemon: 'fire',
    resistencia_pokemon: 'poison',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'
  }

  const options = {
    headers: {'Content-Type': 'application/json'},
  };

  try {
    const response = await axios.put(`${url}`, body, options)
    console.log({
      statusCode: 204,
      log: "Updated Pokemon!"
    });
    
  } catch (error) {
    console.error(error);
  }

}

updated()