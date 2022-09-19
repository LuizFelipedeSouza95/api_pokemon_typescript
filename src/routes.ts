import express from "express";
import { Controllers } from "./controllers/controllerCrud";
import { controllerBattlePokemon } from "./controllers/controllerBattlePokemon";
import { controllerCurePokemon } from "./controllers/controllerCurePokemon";

const router = express.Router();
const controller = new Controllers();
const battle = new controllerBattlePokemon()
const cure = new controllerCurePokemon()

router.post("/savePokemons", controller.createPokemon);
router.get("/searchAllPokemons", controller.searchAllPokemons);
router.get("/searchOnePokemon", controller.searchOnePokemon);
router.put("/toEditPokemon", controller.upDatePokemon);
router.delete("/deletePokemon", controller.destroyPokemon);
router.get("/battlePokemon", battle.battlePokemon);
router.post("/curePokemon", cure.curePokemon);

export { router };
