const express = require('express');
const { createUser, loginUserCtrl, getAllUsers, getUserById, deleteUserById, updateUserById } = require('../controller/userCtrl');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserCtrl);
router.get('/all-users', getAllUsers);
router.get('/:id', authMiddleware, getUserById);
router.delete('/:id', deleteUserById);
router.put('/:id', updateUserById);

module.exports = router;