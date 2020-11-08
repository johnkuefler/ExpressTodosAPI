const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todosController');

/**
 * @swagger
 * /api/v1/todos/:
 *    get:
 *      description: Gets all the todos
 */
router.get('/', todosController.get);

/**
 * @swagger
 * /api/v1/todos/{id}:
 *    get:
 *      description: Gets a todo by id
 */
router.get('/:id', todosController.getById);

/**
 * @swagger
 * /api/v1/todos/create:
 *    post:
 *      description: Create a todo
 */
router.post('/create', todosController.post);

/**
 * @swagger
 * /api/v1/todos/update/{id}:
 *    patch:
 *      description: Updates a todo
 */
router.patch('/update/:id', todosController.patch);

/**
 * @swagger
 * /api/v1/todos/delete/{id}:
 *    delete:
 *      description: Deletes a todo
 */
router.delete('/delete/:id', todosController.delete);

module.exports = router;
