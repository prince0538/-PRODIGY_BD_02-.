const Joi = require('joi');

const userValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required().messages({
            "string.empty": "Name is required",
            "string.min": "Name must be at least 3 characters long",
            "string.max": "Name must be at most 30 characters long"
        }),
        email: Joi.string().trim().email().required().messages({
            "string.email": "Please enter a valid email address",
            "string.empty": "Email is required"
        }),
        age: Joi.number()
            .integer()
            .min(1)
            .max(120)
            .required()
            .messages({
                "any.required": "Age is required",
                "number.base": "Age cannot be empty and must be a number"
            }),
    })

    const { error } = schema.validate(req.body)
    if (error) {
        return res.status(400).json({
            status: "Error",
            statusCode: 400,
            message: "Invalid input",
            error: error.details[0].message
        })
    }
    next()
}

const updateUserValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required().messages({
            "string.empty": "Name is required",
            "string.min": "Name must be at least 3 characters long",
            "string.max": "Name must be at most 30 characters long"
        }),
        email: Joi.string().trim().email().required().messages({
            "string.email": "Please enter a valid email address",
            "string.empty": "Email is required"
        }),
        age: Joi.number()
            .integer()
            .min(1)
            .max(120)
            .required()
            .messages({
                "any.required": "Age is required",
                "number.base": "Age cannot be empty and must be a number"
            }),
    })

    const { error } = schema.validate(req.body)
    if (error) {
        return res.status(400).json({
            status: "Error",
            statusCode: 400,
            message: "Invalid input",
            error: error.details[0].message
        })
    }
    next()
}

module.exports = {
    userValidation,
    updateUserValidation
}
