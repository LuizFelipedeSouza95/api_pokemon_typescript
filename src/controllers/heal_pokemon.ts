import { Request, Response } from "express";
import { Model } from "../database/models/model";

class healController {

  async findAll(req: Request, res: Response) {

/*   const pokemonferido =  await connectionDataBase('Banco_Pokemon.Pokemons').where({ id_pokemon: id });
  const pocao = 20
  const msgpokemon = "Curado"

  if(pokemonferido[0].hp_pokemon == 90){
       pokemonferido[0].hp_pokemon +=10
  }
  else if (pokemonferido[0].hp_pokemon < 100) {
       pokemonferido[0].hp_pokemon += pocao
      }

  const pokemoncurado = {
       hp_pokemon: pokemonferido[0].hp_pokemon
  }

  //SALVA POKEMON CURADO
  const pokemon_curado =  await connectionDataBase(`Banco_Pokemon.Pokemons`).where({ id_pokemon: id }).update(pokemoncurado);
  
  //BUSCA HP APOS CURA
  const pokemonferido1 =  await connectionDataBase(`Banco_Pokemon.Pokemons`).where({ id_pokemon: id });
  const msgpokemon1 = pokemonferido1[0].hp_pokemon

  return `Pokemon ${pokemonferido[0].nome_pokemon} ${msgpokemon} | Seu HP atual é: ${msgpokemon1}` */

  }
}

export default new healController();