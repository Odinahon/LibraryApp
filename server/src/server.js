const http = require("http");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const dotenv = require("dotenv");
dotenv.config();

const { DB_PASSWORD, DB_NAME } = process.env;

const app = require("./app");
const PORT = process.env.PORT || 8080;
const MONGO_URL = `mongodb://intern-mongo-db:${DB_PASSWORD}@intern-mongo-db.mongo.cosmos.azure.com:10255/${DB_NAME}?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@intern-mongo-db@`;
const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
