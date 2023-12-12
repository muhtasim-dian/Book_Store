import express from "express";
import mongoose from "mongoose";
import bookRoute from "./routes/booksRoute.js";
import cors from "cors";
import {} from "dotenv/config";

import { PORT } from "./config.js";

const app = express();
// Middleware for parsing request body
app.use(express.json());
// ***Middleware for handling CORS policy
app.use(cors());

app.use("/books", bookRoute);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("App is connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERN");
});
