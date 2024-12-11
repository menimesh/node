import express from "express";
import cors from "cors";
import connection from "./models/index.js";
import bookroute from "./routes/bookroute.js";
import "dotenv/config";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("backend is working ");
});
app.use("/book", bookroute);
let a = process.env.PORT;
app.listen(process.env.PORT, async () => {
  console.log("server has started ");
  try {
    await connection.authenticate();
    connection.sync();
    console.log("sucessfully connected to database at ");
  } catch (err) {
    console.log("Error  dataase");
  }
});
