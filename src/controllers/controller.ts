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
      name_pokemon,
      type_pokemon,
      weakness_pokemon,
      resistance_pokemon,
      img
    } = req.body;
    const hp_pokemon = 100;
    const pokemon = await Model.create({
      name_pokemon,
      type_pokemon,
      weakness_pokemon,
      resistance_pokemon,
      hp_pokemon,
      img
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

}

export default new Controller();
