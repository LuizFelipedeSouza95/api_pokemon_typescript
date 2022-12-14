import express, { json } from "express";
import { router } from "./routes";
require('dotenv').config()

const PORT = process.env.PORT || '3003';
const app = express();

app.use(json());
app.use(router);

app.listen(PORT, async () => {
  console.info(`⚡️Server is running at http://localhost:${PORT} \n access the API documentation http://localhost:3000/api/pokemon/docs`);
});
