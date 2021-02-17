import { AddressInfo } from "net";
import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import {connectDB} from "./data/database";
import { companyRouter } from "./routes/companyRouter";
import { employeeRouter } from "./routes/employeeRouter";

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

dotenv.config();

connectDB();

app.use("/company", companyRouter);
app.use("/employee", employeeRouter);


const server = app.listen(3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
});