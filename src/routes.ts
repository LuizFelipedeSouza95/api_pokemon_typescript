import express from "express";
import controller from "./controllers/controller";

const router = express.Router();

router.post("/salvarPokemons", controller.Create);
router.get("/buscarTodosPokemons", controller.findAll);
router.get("/buscarUmPokemons/:id", controller.findOne);
router.put("/editarPokemon/:id", controller.upDate);
router.delete("/deletarPokemon/id", controller.destroy);

export { router };
