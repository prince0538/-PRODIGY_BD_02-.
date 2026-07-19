const userModel = require('../models/users')

const createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;

        const existingUser = await userModel.findOne({ email: email.toLowerCase() })

        if (existingUser) {
            return res.status(400).json({
                status: 'Error',
                statusCode: 400,
                message: 'User with this email already exists'
            })
        }

        const newUser = new userModel({
            name,
            email,
            age
        })

        await newUser.save()

        res.status(201).json({
            status: 'Success',
            statusCode: 201,
            message: 'User created successfully',
            data: newUser
        })

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            status: 'Error',
            statusCode: 500,
            message: "Internal server error"
        })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find()

        res.status(200).json({
            status: 'Success',
            statusCode: 200,
            message: 'Users fetched successfully',
            data: users
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            status: 'Error',
            statusCode: 500,
            message: "Internal server error"
        })
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await userModel.findById(id);

        if (!user) {
            return res.status(404).json({
                status: 'Error',
                statusCode: 404,
                message: 'User not found'
            })
        }

        res.status(200).json({
            status: 'Success',
            statusCode: 200,
            message: 'User fetched successfully',
            data: user
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            status: 'Error',
            statusCode: 500,
            message: "Internal server error"
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;

        const user = await userModel.findByIdAndUpdate(id, {
            name,
            email,
            age
        }, { new: true })

        if (!user) {
            return res.status(404).json({
                status: 'Error',
                statusCode: 404,
                message: 'User not found'
            })
        }

        res.status(200).json({
            status: 'Success',
            statusCode: 200,
            message: 'User updated successfully',
            data: user
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            status: 'Error',
            statusCode: 500,
            message: "Internal server error"
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await userModel.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({
                status: 'Error',
                statusCode: 404,
                message: 'User not found'
            })
        }

        res.status(200).json({
            status: 'Success',
            statusCode: 200,
            message: 'User deleted successfully',
            data: user
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            status: 'Error',
            statusCode: 500,
            message: "Internal server error"
        })
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}