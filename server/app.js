const express = require('express');
const app = express()
const Sequelize = require("sequelize");


const PORT = process.env.PORT || 3100
app.use(express.json())
const sequelize = new Sequelize(
    process.env.POSTGRES_DBNAME,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        dialect: 'postgres',
        pool: {
            min: 0,
            max: 120,
            idle: 1000,
            acquire: 1000
        },
        syncOnAssociation: true
    }
)
const User = require("./models/User")(sequelize, Sequelize.DataTypes);
const Product = require("./models/Product")(sequelize, Sequelize.DataTypes)
const Category = require('./models/Category')(sequelize, Sequelize.DataTypes)
const OrderItem = require('./models/OrderUnitsItem')(sequelize, Sequelize.DataTypes)
const OrderInvoice = require('./models/OrderInvoice')(sequelize, Sequelize.DataTypes)
const Options = require('./models/Options')(sequelize, Sequelize.DataTypes);
const OptionTitle = require('./models/OptionTitle')(sequelize, Sequelize.DataTypes)
const ProductOption = require('./models/productOption')(sequelize, Sequelize.DataTypes)

sequelize.sync()
app.get('/', (req, res) => {
    // console.log(req.body)
    OptionTitle
        .create({ ...req.body })
        .then((user) => {
            console.log(user.dataValues, "saved again")
            res.status(200).send()
        })

})
const check = async () => {
    try {
        await sequelize.authenticate();

        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
app.listen(PORT, () => {
    console.log('listening on port', PORT)
    check()
})