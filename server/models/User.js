const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    class User extends Model { }
    User.init({
        userID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userEmail: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            },
            allowNull: false
        },
        userPassword: { type: DataTypes.TEXT },
        userFirstName: {
            type: DataTypes.STRING,
            validate: {
                isAlpha: true
            },
            allowNull: false
        },
        userLastName: {
            type: DataTypes.STRING, validate: {
                isAlpha: true
            }
        },
        userCity: {
            type: DataTypes.STRING, validate: {
                isAlpha: true
            }
        },
        userState: {
            type: DataTypes.STRING, validate: {
                isAlpha: true
            }
        },
        userZip: { type: DataTypes.INTEGER },
        userEmailVerified: { type: DataTypes.BOOLEAN, defaultValue: false },
        userVerificationCode: { type: DataTypes.TEXT },
        userIP: { type: DataTypes.STRING },
        userPhone: { type: DataTypes.STRING },
        userPrimaryAddress: { type: DataTypes.TEXT },
        userSecondaryAddress: { type: DataTypes.TEXT }
    }, {
        sequelize,
        modelName: 'user',
        indexes: [{
            unique: true,
            fields: ['userEmail']
        }],

        timestamps: true
    })
    return User;
}