require("dotenv").config();
const express = require("express");
const massive = require("massive");
const app = express();

app.use(express.json());

const backpackCtrl = require("./controllers/backpackCtrl");

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
})
  .then((db) => {
    app.set("db", db);
    console.log("Database connection established");
  })
  .catch((err) => console.log(err));

app.get("/api/backpackitems", backpackCtrl.getItems);
app.post("/api/backpackitems", backpackCtrl.addItem);

app.listen(SERVER_PORT, () => console.log(`Listening to sweet sounds on ${SERVER_PORT}FM`));
