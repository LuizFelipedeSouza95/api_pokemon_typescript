import express, { json } from "express";
import { router } from "./routes";

const PORT = process.env.PORT || "3003";
const app = express();

app.use(json());
app.use(router);

app.listen(PORT, async () => {
  console.info(`⚡️Server is running at http://localhost:${PORT}`);
});
