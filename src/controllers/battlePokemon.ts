import { Request, Response } from "express";
import { Model } from "../database/models/model";

class ControllerBattle {

  async battlePokemon(req: Request, res: Response) {
    const  {id_pokemon_01, id_pokemon_02}  = req.params;
    const pokemon1 = await Model.findOne({ where: { id: id_pokemon_01 } });

    /* return pokemon1 ? res.status(200).json(pokemon1) : res.status(204).send();//`${pokemon1} ${pokemon2}`; */
    console.log(pokemon1);
    
  }

/* async findOne(req: Request, res: Response) {
  const  {id_pokemon_01}  = req.body;//process.env.ID_POKEMON_01
  const  {id_pokemon_02}  = req.body;//process.env.ID_POKEMON_02

  const pokemon_01 = await Model.findOne({ where: { id: id_pokemon_01 } });
  const pokemon_02 = await Model.findOne({ where: { id: id_pokemon_02 } });

  const superefetivo = 40;
  const efetivo = 20;
  const naoefetivo = 10;

  console.log(id_pokemon_01, id_pokemon_02); */
  
/* 
  async findOne(req: Request, res: Response) {
    const { id_pokemon } = req.body;
    const pokemon = await Model.findOne({ where: { id: id_pokemon } });
    return pokemon ? res.status(200).json(pokemon) : res.status(204).send();
  }
 */

/*       if (pokemon_01[0].hp_pokemon != 0 && pokemon_02[0].hp_pokemon != 0) {
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
  } */

/*   if (pokemon_01[0].hp_pokemon != 0 && pokemon_02[0].hp_pokemon != 0) {
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
  } */

/*   const batlepokemon1 = {
    "hp_pokemon": pokemon_01[0].hp_pokemon,
  };
  const batlepokemon2 = {
    "hp_pokemon": pokemon_02[0].hp_pokemon,
  };

  await Model.update(batlepokemon1, { where: { id: id_pokemon_01 } });
  await Model.update(batlepokemon2, { where: { id: id_pokemon_02 } }); */
    
/*   if (id_pokemon_01[0].hp_pokemon < 0) id_pokemon_01[0].hp_pokemon = 0;
  if (id_pokemon_02[0].hp_pokemon < 0) id_pokemon_02[0].hp_pokemon = 0; */

  //return `${id_pokemon_01[0].nome_pokemon}: ${id_pokemon_01[0].hp_pokemon} / ${id_pokemon_02[0].nome_pokemon}: ${id_pokemon_02[0].hp_pokemon}`;
  //return `deu certo!`
//}
}

export default new ControllerBattle();