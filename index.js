import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes/sampleRoutes.js"
import cors from "cors"

dotenv.config();
const mongoString = process.env.TYPING_DATABASE_URL;
// const mongoString = process.env.TEST_DB;
const port = process.env.PORT || 5000
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});


database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();
app.use(express.json());
app.use(cors())
app.use("/", routes);


app.listen(port || 5000, () => {
  console.log(`Server Started at ${port}`);
});

