const db = require('../models')
const Category = db.categories
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
    console.log(req)
    if (!req.body.description) {
        res.status(400).send({
            message: "Description cannot be empty!"
        })
        return
    }
    const category = {
        description: req.body.description
    }
    try {
        const data = await Category.create(category)
        res.send(data)
    } catch (err) {
        res.status(500).send({
            message: err.message || "Aconteceu um erro ao criar a Categoria"
        })
    }

}

exports.findAll = async (req, res) => {
    console.log('aqui')
    try {
        const data = await Category.findAll()
        res.send(data)
    } catch (err) {
        res.status(500).send({
            message: err.message || "Aconteceu um erro ao buscar as Categorias"
        })
    }

}