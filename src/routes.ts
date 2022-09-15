import express from "express";
import controller from "./controllers/controller";
import ControllerBattle from "./controllers/battlePokemon";

const router = express.Router();

router.post("/salvarPokemons", controller.Create);
router.get("/buscarTodosPokemons", controller.findAll);
router.get("/buscarUmPokemon", controller.findOne);
router.put("/editarPokemon", controller.upDate);
router.delete("/deletarPokemon", controller.destroy);
router.get("/batalhaPokemon", ControllerBattle.battlePokemon);

export { router };
