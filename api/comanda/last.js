// last_comanda.js

// const Surreal = require("surrealdb.js");
import Surreal from "surrealdb.js";
const db = new Surreal("https://surrealdb-outl.onrender.com/rpc");

export default async function handler(req, res) {
  await db.signin({
    user: process.env.user,
    pass: process.env.password,
  });

  // Select a specific namespace / database
  await db.use("test", "test");

  const last = await db.query("SELECT * FROM comanda ORDER BY at DESC LIMIT 1");
  res.status(200).json(last[0].result[0]);
}
