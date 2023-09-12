import express from "express";
import Register from "../controller/register-controller.js";
import { Registerschema } from "../validator/Register-schema.js";

const apiroutes = express.Router();



apiroutes.post('/register',Registerschema,Register)

export default apiroutes;
