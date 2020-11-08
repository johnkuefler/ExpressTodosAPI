const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todosController');

router.get('/', todosController.get);

router.post('/create', todosController.post);

router.patch('/update/{id}', todosController.patch);

router.delete('/delete/{id}', todosController.delete);

module.exports = router;
