import {check} from "express-validator";

export const Registerschema=[
    check('name').trim().isAlpha().withMessage("Name Should Be Aplhabet Only"),
    check('username',"username is Required").exists().isAlphanumeric()
    .withMessage("USername Should Be Alphanumeric ")
    .trim()
    .isLength({min:6,max:32}),
    check('email','Email Is Not Valid ').exists().isEmail(),
    check('password', 'Password is required').isLength({min:6,max:10}).trim(),
]