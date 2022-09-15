import axios from 'axios';

async function findOne() {

  const url = `http://${process.env.DATA_BASE_HOST}:${process.env.PORT}/buscarUmPokemon`

  const options = {
    headers: {'Content-Type': 'application/json'},
    data: {
      id_pokemon: process.env.ID_POKEMON
    }
  };

  try {

    const response = await axios.get(`${url}`, options)
    console.log({
      basePokemon: response.data,
      statusCode: 200
    });

  } catch (error) {
    console.error(error);
  }

}

findOne()