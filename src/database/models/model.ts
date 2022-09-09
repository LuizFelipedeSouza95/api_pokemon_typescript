import { db } from "../db";
import { DataTypes } from "sequelize";

export const Model = db.define("pokemons", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome_pokemon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo_pokemon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fraqueza_pokemon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  resistencia_pokemon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hp_pokemon: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
