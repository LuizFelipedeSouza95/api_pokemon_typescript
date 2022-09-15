import axios from 'axios';

async function destroy() {

  const url = `http://${process.env.DATA_BASE_HOST}:${process.env.PORT}/deletarPokemon`

  const body = {
    id_pokemon: process.env.ID_POKEMON
  }

  const options = {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    data: body,
  };

  try {

    const response = await axios.delete(`${url}`, options)
    console.log({
      statusCode: 204,
      log: "Deleted Pokemon!"
    });

  } catch (error) {
    console.error(error);
  }

}

destroy()