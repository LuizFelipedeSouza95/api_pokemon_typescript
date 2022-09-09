import { Sequelize } from "sequelize";

export const db = new Sequelize(
  "api_pokemon_typescript",//process.env.DATABASE_NAME,
  "LuizFelipe",//process.env.DATABASE_USER,
  "061730Abra883?",//process.env.DATABASE_PASS,
  {
    dialect: "mysql",
    host: "localhost",//process.env.DATABASE_HOST,
    port: +"3306",//+process.env.DATABASE_PORT,
  }
);
