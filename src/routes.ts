import express from "express";
import controller from "./controllers/controller";
import ControllerBattle from "./controllers/battlePokemon";

const router = express.Router();

router.post("/savePokemons", controller.Create);
router.get("/searchTodosPokemons", controller.findAll);
router.get("/searchUmPokemon", controller.findOne);
router.put("/toEditPokemon", controller.upDate);
router.delete("/deletePokemon", controller.destroy);
router.get("/battlePokemon", ControllerBattle.battlePokemon);

export { router };
