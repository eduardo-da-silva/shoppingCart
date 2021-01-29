'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/**
*  @swagger
*  definitions:
*    CategoryList:
*      type: object
*      properties:
*        id:
*          type: uint
*        description:
*          type: string
*      example:
*           [
*             {
*               "id": 0,
*               "description": "string"
*             }
*           ]
*    CategoryCreateUpdate:
*      type: object
*      properties:
*        description:
*          type: string
*      required:
*        description
*/

class Category extends Model {
}

module.exports = Category
