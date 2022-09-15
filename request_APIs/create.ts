import axios from "axios";

async function create() {
  const url = `http://${process.env.DATA_BASE_HOST}:${process.env.PORT}/salvarPokemons`;

  const body = {
    nome_pokemon: process.env.NOME_CREATE_POKEMON,
    tipo_pokemon: process.env.TIPO_CREATE_POKEMON,
    fraqueza_pokemon: process.env.FAQUEZA_CREATE_POKEMON,
    resistencia_pokemon: process.env.RESISTENCIA_CREATE_POKEMON,
    img: process.env.IMG_CREATE_POKEMON,
  };

  const options = {
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await axios.post(`${url}`, body, options);
    console.log({
      statusCode: 201,
      log: "Registered Pokemon!",
      result: response.data,
    });
  } catch (error) {
    console.error(error);
  }
}

create();
