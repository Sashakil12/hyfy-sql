const express = require('express');
const app = express()
const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize")
const userRoutes = require('./Routes/UserRoutes')




//db connect
const PORT = process.env.PORT || 3000
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
Product.belongsTo(Category, {
    foreignKey: 'productCategoryId',
    targetKey: "categoryId"
})




// app.get('/prodcat', async (req, res) => {
//     // Category.create({ ...req.body.category }).then(cate => {
//     //     console.log(cate.dataValues)
//     //     Product.create({ ...req.body.product, productCategoryId: cate.dataValues.categoryId })

//     // })
//     Product.findAll({ include: Category }).then(prod => {
//         console.log(prod.dataValues)
//         res.json({ ...prod })
//     })

// })
app.use('/users', userRoutes)
// app.use('tracker', trackerRoutes)
// app.use('business', businessRoutes)
// app.use('moderator', moderatorRoutes)
// app.use('admin', adminRoutes)
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('listening on port', PORT)

    })
})
