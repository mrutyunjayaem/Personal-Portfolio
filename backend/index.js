import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./routes/emailRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
