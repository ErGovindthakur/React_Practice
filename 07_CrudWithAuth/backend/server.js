import app from "./app.js";
import dotenv from "dotenv";
import { connectDb } from "./db/db.js";

dotenv.config({});

// eslint-disable-next-line no-undef
const port = process.env.PORT || 8080;

const startServer = async () => {
  await connectDb();
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};

startServer();
