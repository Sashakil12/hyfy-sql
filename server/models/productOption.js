const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    class ProductOption extends Model { }
    ProductOption.init({
        productOptionId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        optionId: {
            type: DataTypes.INTEGER, allowNull: false,
            validate: {
                isNumeric: true
            },
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER,
            validate: {
                isNumeric: true
            },
            allowNull: false
        },
        optionTitleId: {
            type: DataTypes.INTEGER, validate: {
                isNumeric: true
            },

        },
        optionPriceFactor: {
            type: DataTypes.INTEGER, validate: {
                isNumeric: true
            }
        },

    }, {
        sequelize,
        modelName: 'productOption',
        indexes: [{
            unique: true,
            fields: ['optionId', 'productId']
        }],

        timestamps: false
    })
    return ProductOption;
}