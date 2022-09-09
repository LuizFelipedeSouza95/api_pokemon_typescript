import express, { json } from "express";
import { db } from "./database/db";
import { router } from "./routes";

const PORT = process.env.PORT || "3000";
const app = express();

app.use(json());
app.use(router);

app.listen(3000, async () => {
  await db.sync();
  console.log("Servidor ativo na porta:", PORT);
});
