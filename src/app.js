import express from "express";
import apiroutes from "./utils/api.js";
const app = express();

const PORT = 8000;

app.use('/api/' , apiroutes);

app.listen( PORT , ()=>
{
    console.log("App Is running")
})