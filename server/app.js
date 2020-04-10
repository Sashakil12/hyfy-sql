const express = require('express');
const app = express()
const { sequelize } = require('./models/db')
//routers
const userRoutes = require('./Routes/UserRoutes')

//app specific settings
const PORT = process.env.PORT || 3000
app.use(express.json())

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