import express from "express";
import { Controllers } from "./controllers/controllerCrud";
import { controllerBattlePokemon } from "./controllers/controllerBattlePokemon";
import { controllerCurePokemon } from "./controllers/controllerCurePokemon";
import { serve,setup } from "swagger-ui-express"
import * as swagger from "./swagger.json";

const router = express.Router();
const controller = new Controllers();
const battle = new controllerBattlePokemon()
const cure = new controllerCurePokemon()

router.use('/api/pokemon/docs', serve, setup(swagger));
router.post("/api/pokemon/create", controller.createPokemon);
router.get("/api/pokemon/searchAll", controller.searchAllPokemons);
router.get("/api/pokemon/searchOne", controller.searchOnePokemon);
router.put("/api/pokemon/update", controller.upDatePokemon);
router.delete("/api/pokemon/delete", controller.destroyPokemon);
router.get("/api/pokemon/battle", battle.battlePokemon);
router.post("/api/pokemon/cure", cure.curePokemon);

export { router };
