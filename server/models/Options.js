const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    class Option extends Model { }
    Option.init({
        optionId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        optionName: {
            type: DataTypes.STRING, allowNull: false,
            validate: {
                isAlphanumeric: true
            },
            allowNull: false
        },

    }, {
        sequelize,
        modelName: 'option',
        indexes: [{
            unique: true,
            fields: ['optionId']
        }],

        timestamps: false
    })
    return Option;
}