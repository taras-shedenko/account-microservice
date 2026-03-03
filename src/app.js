import express from "express";
import { verifyAuth } from "./middlewares/verify.js";
import accountRouter from "./routers/account.js";

const app = express();
app.use(express.json());
// app.use(verifyAuth);
app.use("/accounts", accountRouter);

export default app;
