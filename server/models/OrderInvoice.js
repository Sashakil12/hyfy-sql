const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    class OrderInvoice extends Model { }
    OrderInvoice.init({
        orderInvoiceID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        orderUserID: {
            type: DataTypes.INTEGER,
            validate: {
                isNumeric: true
            },
            allowNull: false
        },
        orderAmount: { type: DataTypes.FLOAT, allowNull: false },
        recipientName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shippingAddress: {
            type: DataTypes.STRING, allowNull: false
        },
        alternateShippingAddress: {
            type: DataTypes.STRING
        },
        orderCity: {
            type: DataTypes.STRING, validate: {
                isAlpha: true
            }
        },
        orderState: { type: DataTypes.STRING, validate: { isAlpha: true } },
        orderPostCode: { type: DataTypes.INTEGER },
        recipientPhone: { type: DataTypes.STRING },
        recipientEmail: { type: DataTypes.STRING },
        shippingCharge: { type: DataTypes.STRING },
        vat: { type: DataTypes.INTEGER, defaultValue: 15 },
        discount: { type: DataTypes.INTEGER },
        orderShipped: { type: DataTypes.BOOLEAN, defaultValue: false }

    }, {
        sequelize,
        modelName: 'orderInvoice',
        indexes: [{
            unique: true,
            fields: ['orderInvoiceID', 'orderUserID']
        }],

        timestamps: true
    })
    return OrderInvoice;
}