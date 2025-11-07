import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({});

// eslint-disable-next-line no-undef
const port = process.env.PORT || 8080;

const startServer = async () => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};

startServer();