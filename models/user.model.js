const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('User', {
        UserId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Username : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        StateId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            references: {
                model: 'State',
                key: 'StateId'
            }
        },
    }, {
        timestamps: false,
        tableName: 'User'
    });

    User.associate = (models) => {
        User.belongsToMany(models.Profile, {
            through: 'User_Profiles'
        })
    }

    return User;
}