const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    class Option extends Model { }
    Option.init({
        optionTitleId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        optionTitle: {
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