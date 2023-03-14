// last_comanda.js

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

  // const comandas = await db.select("comanda");
  const comandas = await db.query("SELECT * FROM comanda ORDER BY at DESC");

  res.status(200).json(comandas[0].result);
}
