import express, { request, response } from "express"
import routers from "./routes/index";
import mongoose from "mongoose";
//import MongoStore from "connect-mongo"
import cors from "cors";

import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

mongoose
    .connect("mongodb://localhost/everhome")
    .then(() => console.log("Connect to Database"))
    .catch((err) => console.log(`Error: ${err}`));

app.use(cors());
app.use(express.json());

app.use(routers);

app.use(express.static(path.join(__dirname, '../../evermore/build')));

const PORT = process.env.PORT || 5000;

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../evermore/build/index.html'));
  });

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});