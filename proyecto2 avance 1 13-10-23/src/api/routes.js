import express from "express"
import { connection, getAllUsers } from "../db/connection.js";

const app = express();
const port = 5000;

export const initExpress = app.listen(port, () => {
   console.log("App listening on port 5000...")
});

app.get("/api/user" , (req, res) => {
   const user = {id: 1, name: "Derek Kaled"};
   return res.status(200).json({})
});