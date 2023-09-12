import { validationResult } from "express-validator";
import { jsonGenerator } from "../utils/helper.js";
import { statusCode } from "../utils/constant.js";

const Register = (req,res) =>{
    const error = validationResult(req);

    if(error.isEmpty())
    {

    }
    res.json(jsonGenerator(statusCode.VALIDATION_ERROR,"validation error",error.mapped()));
}

export default Register;