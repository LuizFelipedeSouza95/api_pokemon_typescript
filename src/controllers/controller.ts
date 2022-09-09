import { Request, Response } from "express";
import { Model } from "../database/models/model";

class Controller {
  async findAll(req: Request, res: Response) {}
  async findOne(req: Request, res: Response) {}
  async Create(req: Request, res: Response) {
    const {
      nome_pokemon,
      tipo_pokemon,
      fraqueza_pokemon,
      resistencia_pokemon,
      hp_pokemon,
    } = req.body;
    const pokemon = await Model.create({
      nome_pokemon,
      tipo_pokemon,
      fraqueza_pokemon,
      resistencia_pokemon,
      hp_pokemon,
    });
    return res.status(201).json(pokemon);
  }
  async upDate(req: Request, res: Response) {}
  async destroy(req: Request, res: Response) {}
}

export default new Controller();
