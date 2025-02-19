import express from "express";
import { connection } from "./database/connector.js";
import cors from "cors";
import rankRoutes from "./routes/rankRoutes.js";

const app = express();

// Connecting to the database
connection().then((r) => console.log("Connected to the database"));

// Midelwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/api", rankRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server listenting on port:", process.env.PORT);
});
