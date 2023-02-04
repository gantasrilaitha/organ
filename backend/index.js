import express from "express";
import mongoose from "mongoose";
import { readdirSync } from "fs";
import cors from "cors";
import "dotenv/config";
const app = express();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server Started at ${4000}`);
});
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const dburl = process.env.DATABASE_URL;
mongoose.connect(dburl);
const database = mongoose.connection;
database.once("connected", () => {
  console.log("Database connected successfully!");
});
database.on("error", (err) => {
  console.log(err);
});
module.exports = app;
