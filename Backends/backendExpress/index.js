const express = require('express')
const bodyParser = require('body-parser')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const app = express()


const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Shopping Cart - Express",
            version: "0.1.1",
            description:
                "This is a simple CRUD API application made with Express and documented with Swagger",
            contact: {
                name: "Eduardo da Silva",
                email: "eduardo.silva@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3000/api/",
            },
        ],
    },
    apis: [
        "./app/**/*js"],
    explorer: true
};

const specs = swaggerJsdoc(options);



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
}))

const db = require("./app/models");
db.sequelize.sync();

require('./app/routes/category.routes')(app)

const routerSwager = require('express').Router()
// const swaggerDocument = require('./swagger.json');

routerSwager.use('/docs', swaggerUi.serve);
routerSwager.get('/docs', swaggerUi.setup(specs));

app.use('/', routerSwager)

// app.use(
//     "/docs",
//     swaggerUi.serve,
//     swaggerUi.setup(specs)
// );


app.listen(3000, () => console.log("App running on port 3000"))
