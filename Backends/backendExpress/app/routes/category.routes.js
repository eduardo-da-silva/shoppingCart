/**
* @swagger
* /categories:
*   get:
*     tags:
*       - Products
*     summary: Get all categories
*     produces:
*       - application/json
*     responses:
*       '200':
*         description: OK
*         schema:
*           $ref: '#/components/schemas/CategoryList'
*
*   post:
*     operationId: api_v1_categories_create
*     description: ''
*     tags:
*       - Products
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     requestBody:
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/CategoryCreateUpdate'
*
*     responses:
*       '201':
*         description: CREATED
*         schema:
*           $ref: '#/components/schemas/CategoryList'
*       description: ''
*/

module.exports = app => {
    const categories = require('../controllers/category.controller')

    const router = require('express').Router()


    router.get('/', categories.findAll)
    router.post('/', categories.create)

    app.use('/api/categories', router)
}