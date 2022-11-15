import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class Controllers {
  async createPokemon(req: Request, res: Response) {
    const {
      name_pokemon,
      type_pokemon,
      weakness_pokemon,
      resistance_pokemon,
      img,
    } = req.body;
    const hp_pokemon = 100;
    const pokemon = await prismaClient.pokemons.create({
      data: {
        name_pokemon,
        type_pokemon,
        weakness_pokemon,
        resistance_pokemon,
        hp_pokemon,
        img,
      },
    });
    return res.status(201).json(pokemon);
  }

  async searchOnePokemon(req: Request, res: Response) {
    const { id_pokemon } = req.body;
    const pokemon = await prismaClient.pokemons.findFirst({
      where: {
        id: id_pokemon,
      },
    });
    return pokemon ? res.status(200).json(pokemon) : res.status(204).send();
  }

  async searchAllPokemons(req: Request, res: Response) {
    const pokemons = await prismaClient.pokemons.findMany();
    return pokemons.length > 0
      ? res.status(200).json(pokemons)
      : res.status(204).send();
  }

  async upDatePokemon(req: Request, res: Response) {
    const { id_pokemon } = req.body;
    const {
      name_pokemon,
      type_pokemon,
      weakness_pokemon,
      resistance_pokemon,
      hp_pokemon,
      img,
    } = req.body;
    const pokemon = await prismaClient.pokemons.update({
      where: {
        id: id_pokemon,
      },
      data: {
        name_pokemon: name_pokemon,
        type_pokemon: type_pokemon,
        weakness_pokemon: weakness_pokemon,
        resistance_pokemon: resistance_pokemon,
        hp_pokemon: hp_pokemon,
        img: img,
      },
    });
    const pokemon_id = await prismaClient.pokemons.findFirst({
      where: {
        id: id_pokemon,
      },
    });
    return res.status(204).send();
  }

  async destroyPokemon(req: Request, res: Response) {
    const { id_pokemon } = req.body;
    const pokemon = await prismaClient.pokemons.delete({
      where: {
        id: id_pokemon,
      },
    });
    return res.status(204).send();
  }

}
