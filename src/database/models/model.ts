import { db } from "../db";
import { DataTypes } from "sequelize";

export const Model = db.define("pokemons", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name_pokemon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type_pokemon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weakness_pokemon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  resistance_pokemon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hp_pokemon: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
