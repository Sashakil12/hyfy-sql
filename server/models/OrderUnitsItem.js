const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    class OrderItem extends Model { }
    OrderItem.init({
        orderId: {
            type: DataTypes.INTEGER,
            validate: {
                isNumeric: true
            },
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER, allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        productSKU: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true
            },
            allowNull: false
        },
        productPrice: {
            type: DataTypes.INTEGER, validate: {
                isNumeric: true
            },

        },
        qty: {
            type: DataTypes.INTEGER, validate: {
                isNumeric: true
            }
        },

    }, {
        sequelize,
        modelName: 'orderItem',
        indexes: [{
            unique: true,
            fields: ['orderId']
        }],

        timestamps: true
    })
    return OrderItem;
}