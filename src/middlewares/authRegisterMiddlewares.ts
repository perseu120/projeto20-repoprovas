import schemaUserLogin from "../screma/schemaUserRegistre";

export default function userValidate(req, res, next){

    const userValidate = schemaUserLogin.validate(req.body);

    if(userValidate.error){
        res.status(422).send(`${userValidate.error.message}`);
        return;
    }

    next();
}