import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class controllerCurePokemon {
  async curePokemon(req: Request, res: Response) {
    const { id_pokemon } = req.body;
    const pokemonInjured = await prismaClient.pokemons.findFirst({
      where: {
        id: id_pokemon,
      },
    });
    const pocao = 20;

    if (pokemonInjured.hp_pokemon == 90) {
      pokemonInjured.hp_pokemon += 10;
    } else if (pokemonInjured.hp_pokemon < 100) {
      pokemonInjured.hp_pokemon += pocao;
    }
  
    if(pokemonInjured.hp_pokemon > 100) pokemonInjured.hp_pokemon = 100

    const hpPokemonCured = pokemonInjured.hp_pokemon;

    const pokemonCured = await prismaClient.pokemons.update({
      where: {
        id: id_pokemon,
      },
      data: {
        hp_pokemon: hpPokemonCured,
      },
    });

    return res.status(200).json(pokemonCured);
  }
}