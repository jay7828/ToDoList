import express from "express";
import Register from "../controller/register-controller";

const apiroutes = express.Router();

apiroutes.post('/register',Register)

export default apiroutes;
