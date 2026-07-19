const router = require('express').Router();
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require('../controller/users');

const {
    userValidation,
    updateUserValidation
} = require('../middlewares/validator');

router.post('/users', userValidation, createUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUserValidation, updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
