import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class controllerBattlePokemon {
  async battlePokemon(req: Request, res: Response) {
    const { id_pokemon_01, id_pokemon_02 } = req.body;
    const pokemon01 = await prismaClient.pokemons.findFirst({
      where: {
        id: id_pokemon_01,
      },
    });
    const pokemon02 = await prismaClient.pokemons.findFirst({
      where: {
        id: id_pokemon_02,
      },
    });
    const superefetivo = 40;  //when the weakness is the same as the other's type
    const efetivo = 25;  //when the weakness is equal to the strength of the other
    const naoefetivo = 5;  //when type is different from weakness and strength

    //pokemon attack 01
    if (pokemon01.hp_pokemon != 0 && pokemon02.hp_pokemon != 0) {
      if (pokemon01.type_pokemon == pokemon02.weakness_pokemon) {
        pokemon02.hp_pokemon = pokemon02.hp_pokemon - superefetivo;
      } else if (pokemon01.type_pokemon == pokemon02.resistance_pokemon) {
        pokemon02.hp_pokemon = pokemon02.hp_pokemon - naoefetivo;
      } else {
        pokemon02.hp_pokemon = pokemon02.hp_pokemon - efetivo;
      }
    }

    //pokemon attack 02
    if (pokemon01.hp_pokemon != 0 && pokemon02.hp_pokemon != 0) {
      if (pokemon02.type_pokemon == pokemon01.weakness_pokemon) {
        pokemon01.hp_pokemon = pokemon01.hp_pokemon - superefetivo;
      } else if (pokemon02.type_pokemon == pokemon01.resistance_pokemon) {
        pokemon01.hp_pokemon = pokemon01.hp_pokemon - naoefetivo;
      } else {
        pokemon01.hp_pokemon = pokemon01.hp_pokemon - efetivo;
      }
    }

    if(pokemon01.hp_pokemon < 0) pokemon01.hp_pokemon = 0
    if(pokemon02.hp_pokemon < 0) pokemon02.hp_pokemon = 0

    const hp_pokemon01 = pokemon01.hp_pokemon;
    const hp_pokemon02 = pokemon02.hp_pokemon;

    const pokemonUpdate01 = await prismaClient.pokemons.update({
      where: {
        id: id_pokemon_01,
      },
      data: {
        hp_pokemon: hp_pokemon01,
      },
    });

    const pokemonUpdate02 = await prismaClient.pokemons.update({
      where: {
        id: id_pokemon_02,
      },
      data: {
        hp_pokemon: hp_pokemon02,
      },
    });

    const pokemons = {
      pokemon01,
      pokemon02,
    };

    return res.status(200).json(pokemons);
  }
}
