'use strict'

const Category = use('App/Models/Category')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with categories
 */
class CategoryController {
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
  *           $ref: '#/definitions/CategoryList'
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
  *     parameters:
  *       - in: body
  *         name: category
  *         schema:
  *           $ref: '#/definitions/CategoryCreateUpdate'
  *       
  *     responses:
  *       '201':
  *         description: CREATED
  *         schema:
  *           $ref: '#/definitions/CategoryList'
  *       description: ''
  */

  /**
   * Show a list of all categories.
   * GET categories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const categories = await Category.query().fetch()
    return response.json(categories)
  }

  /**
   * Render a form to be used for creating a new category.
   * GET categories/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new category.
   * POST categories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const description = request.input('description')
    const category = new Category()
    category.description = description
    await category.save()
    return response.json(category)
  }

  /**
   * Display a single category.
   * GET categories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing category.
   * GET categories/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update category details.
   * PUT or PATCH categories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const description = request.input('description')
    let category = await Category.find(params.id)
    category.description = description
    await category.save()
    return response.json(category)
  }

  /**
   * Delete a category with id.
   * DELETE categories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    await Category.find(params.id).delete()
    return response.json({ message: 'Category deleted' })
  }
}

module.exports = CategoryController
