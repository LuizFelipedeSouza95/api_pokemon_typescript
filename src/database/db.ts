import { Sequelize } from "sequelize";

export const db = new Sequelize(
  process.env.DATA_BASE_NAME,
  process.env.DATA_BASE_USER,
  process.env.DATA_BASE_PASS,
  {
    dialect: "mysql",
    host: process.env.DATA_BASE_HOST,
    port: +process.env.DATA_BASE_PORT,
  }
);
