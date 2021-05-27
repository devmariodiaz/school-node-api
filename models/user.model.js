const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primarykey: true
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
            references: {
                model: 'State',
                key: 'StateId'
            }
        },
    });
}