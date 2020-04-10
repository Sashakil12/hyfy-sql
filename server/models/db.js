const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize")

//connect db
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

//declaring model
const User = require("./User")(sequelize, Sequelize.DataTypes);
const Product = require("./Product")(sequelize, Sequelize.DataTypes)
const Category = require('./Category')(sequelize, Sequelize.DataTypes)
const OrderItem = require('./OrderUnitsItem')(sequelize, Sequelize.DataTypes)
const OrderInvoice = require('./OrderInvoice')(sequelize, Sequelize.DataTypes)
const Options = require('./Options')(sequelize, Sequelize.DataTypes);
const OptionTitle = require('./OptionTitle')(sequelize, Sequelize.DataTypes)
const ProductOption = require('./productOption')(sequelize, Sequelize.DataTypes)
Product.belongsTo(Category, {
    foreignKey: 'productCategoryId',
    targetKey: "categoryId"
})
module.exports = {
    User,
    Product,
    Category,
    OrderItem,
    OrderInvoice,
    Options,
    OptionTitle,
    ProductOption,
    sequelize
}