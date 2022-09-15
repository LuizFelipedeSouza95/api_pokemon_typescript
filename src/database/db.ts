import { Sequelize } from "sequelize";

export const db = new Sequelize(
  process.env.DATA_BASE_NAME, // nome do banco de dados
  process.env.DATA_BASE_USER, // usuario
  process.env.DATA_BASE_PASS, // senha do banco de dados
  {
    dialect: "mysql",
    host: process.env.DATA_BASE_HOST, // servidor
    port: +process.env.DATA_BASE_PORT, // porta
  }
);
