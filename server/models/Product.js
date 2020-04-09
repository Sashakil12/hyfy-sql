const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    class Product extends Model { }
    Product.init({
        productID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productSKU: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true
            },
            allowNull: false
        },
        productName: { type: DataTypes.STRING, allowNull: false },
        productPrice: {
            type: DataTypes.STRING,
            validate: {
                isNumeric: true
            },
            allowNull: false
        },
        productDesc: {
            type: DataTypes.TEXT,
        },
        productImage: {
            type: DataTypes.TEXT
        },

        productCategoryId: { type: DataTypes.STRING },
        inStock: { type: DataTypes.INTEGER },
        isLive: { type: DataTypes.BOOLEAN, defaultValue: false },
    }, {
        sequelize,
        modelName: 'product',
        indexes: [{
            unique: true,
            fields: ['productSKU', 'productName']
        }],
        timestamps: true
    })

    return Product;
}