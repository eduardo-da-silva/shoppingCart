/**
*  @openapi
*
*  components:
*    schemas:
*      CategoryList:
*        type: object
*        properties:
*          id:
*            type: uint
*          description:
*            type: string
*        example:
*           "id": 0,
*           "description": "string"

*      CategoryCreateUpdate:
*        type: object
*        properties:
*          description:
*            type: string
*        required:
*          description
*/

module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
        description: {
            type: Sequelize.STRING
        }
    })
    return Category
}