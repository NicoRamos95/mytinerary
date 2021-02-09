const Joi = require("joi")

const validator = {
    register: (req, res, next) => {
        const schema = Joi.object({
            firstName: Joi.string(),
            lastName: Joi.string(),
            userName : Joi.string().alphanum().min(3).max(30).required(),
            email: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/),
            urlPic: Joi.string().required(),
            country: Joi.string()
        })
        const validation = schema.validate(req.body, {abortEarly: false})
        console.log(validation)
        if (!validation.error) {
            next()
        } else {
            res.json({success: false, errores: ['Complete todos lo campos correctamente.']})
        }
    }
}

module.exports = validator