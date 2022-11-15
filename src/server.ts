import express, { json } from "express";
import { router } from "./routes";
require('dotenv').config()

const port = process.env.PORT||'3003';
const app = express();

app.use(json());
app.use(router);

app.listen(port, async () => {
  console.info(`⚡️Server is running at http://localhost:${port}`);
});
