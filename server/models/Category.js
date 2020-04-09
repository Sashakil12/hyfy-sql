const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    class Category extends Model { }
    Category.init({
        categoryID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        categoryName: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true
            },
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'category',
        indexes: [{
            unique: true,
            fields: ['categoryName']
        }],
        timestamps: false
    })

    return Category;
}