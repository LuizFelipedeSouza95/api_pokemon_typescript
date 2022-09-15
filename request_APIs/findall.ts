import axios from 'axios';

async function findall() {

  const url = `http://${process.env.DATA_BASE_HOST}:${process.env.PORT}/buscarTodosPokemons`

  try {

    const response = await axios.get(`${url}`)
    console.log({
      basePokemon: response.data,
      statusCode: 200
    });

  } catch (error) {
    console.error(error);
  }

}

findall()