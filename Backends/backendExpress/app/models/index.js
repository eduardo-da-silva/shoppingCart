const dbConfig = require("../../config/db.config")
const sqlite = require('sqlite3')
const Sequelize = require('sequelize')

const db = new sqlite.Database(dbConfig.storage)
const sequelize = new Sequelize('shoppingCart', '', '', { dialect: dbConfig.dialect, storage: dbConfig.storage })

db.Sequelize = Sequelize
db.sequelize = sequelize

db.categories = require('./category.model.js')(sequelize, Sequelize)

module.exports = db