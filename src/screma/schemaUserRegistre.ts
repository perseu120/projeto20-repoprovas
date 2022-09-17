import Joi from 'joi';

const schemaUserRegistre = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.ref('password')
})

export default schemaUserRegistre;