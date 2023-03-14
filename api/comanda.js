// comanda.js

// const Surreal = require("surrealdb.js");
import Surreal from "surrealdb.js";
const db = new Surreal("https://surrealdb-outl.onrender.com/rpc");

export default async function handler(req, res) {
  await db.signin({
    user: process.env.USER,
    pass: process.env.PASSWORD,
  });

  // Select a specific namespace / database
  await db.use("test", "test");

  await db.create("comanda", {
    at: Date.now(),
  });

  res.status(200).json({ message: "Comanda creada" });
}
