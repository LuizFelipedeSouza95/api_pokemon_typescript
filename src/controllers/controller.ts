import { Request, Response } from "express";
import { Model } from "../database/models/model";

class Controller {
  async findAll(req: Request, res: Response) {
    const pokemons = await Model.findAll();
    return pokemons.length > 0
      ? res.status(200).json(pokemons)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {
    const { id_pokemon } = req.body;
    const pokemon = await Model.findOne({ where: { id: id_pokemon } });
    return pokemon ? res.status(200).json(pokemon) : res.status(204).send();
  }

  async Create(req: Request, res: Response) {
    const {
      nome_pokemon,
      tipo_pokemon,
      fraqueza_pokemon,
      resistencia_pokemon,
    } = req.body;
    const hp_pokemon = 100;
    const pokemon = await Model.create({
      nome_pokemon,
      tipo_pokemon,
      fraqueza_pokemon,
      resistencia_pokemon,
      hp_pokemon,
    });
    return res.status(201).json(pokemon);
  }

  async upDate(req: Request, res: Response) {
    const { id_pokemon } = req.body;
    await Model.update(req.body, { where: { id: id_pokemon } });
    return res.status(204).send();
  }

  async destroy(req: Request, res: Response) {
    const { id_pokemon } = req.body;
    await Model.destroy({ where: { id: id_pokemon } });
    return res.status(204).send();
  }



    //// EM DESENVOLVIMENTO
  async battlePokemon(req: Request, res: Response) {
    const { id_pokemon } = req.body;

    await Model.findOne({ where: { id: id_pokemon } });
    
    //const pokemon_02 = await Model.findOne({ where: { id: id_pokemon_02 } });
    const superefetivo = 40;
    const efetivo = 20;
    const naoefetivo = 10;
    return res.status(204).send();
/*     if (pokemon_01[0].hp_pokemon != 0 && pokemon_02[0].hp_pokemon != 0) {
      if (pokemon_01[0].tipo_pokemon == pokemon_02[0].fraqueza_pokemon) {
        pokemon_02[0].hp_pokemon =
          pokemon_02[0].hp_pokemon - superefetivo;
      } else if (
        pokemon_01[0].tipo_pokemon == pokemon_02[0].resistencia_pokemon
      ) {
        pokemon_02[0].hp_pokemon = pokemon_02[0].hp_pokemon - naoefetivo;
      } else {
        pokemon_02[0].hp_pokemon = pokemon_02[0].hp_pokemon - efetivo;
      }
    }

    if (pokemon_01[0].hp_pokemon != 0 && pokemon_02[0].hp_pokemon != 0) {
      if (pokemon_02[0].tipo_pokemon == pokemon_01[0].fraqueza_pokemon) {
        pokemon_01[0].hp_pokemon =
          pokemon_01[0].hp_pokemon - superefetivo;
      } else if (
        pokemon_02[0].tipo_pokemon == pokemon_01[0].resistencia_pokemon
      ) {
        pokemon_01[0].hp_pokemon = pokemon_01[0].hp_pokemon - naoefetivo;
      } else {
        pokemon_01[0].hp_pokemon = pokemon_01[0].hp_pokemon - efetivo;
      }
    }

    const batlepokemon1 = {
      "hp_pokemon": pokemon_01[0].hp_pokemon,
    };
    const batlepokemon2 = {
      "hp_pokemon": pokemon_02[0].hp_pokemon,
    };

    await Model.update(batlepokemon1, { where: { id: id_pokemon_01 } });
    await Model.update(batlepokemon2, { where: { id: id_pokemon_02 } });
      
    if (id_pokemon_01[0].hp_pokemon < 0) id_pokemon_01[0].hp_pokemon = 0;
    if (id_pokemon_02[0].hp_pokemon < 0) id_pokemon_02[0].hp_pokemon = 0;

    //return `${id_pokemon_01[0].nome_pokemon}: ${id_pokemon_01[0].hp_pokemon} / ${id_pokemon_02[0].nome_pokemon}: ${id_pokemon_02[0].hp_pokemon}`;
    return `deu certo!` */

  }
}

export default new Controller();
