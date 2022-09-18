import express, { json } from "express";
import { db } from "./database/db";
import { router } from "./routes";

const PORT = process.env.PORT || "3003";
const app = express();

app.use(json());
app.use(router);

app.listen(PORT, async () => {
  await db.sync();
  console.log("Active server on port:", PORT);
});
