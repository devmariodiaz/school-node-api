const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let State = sequelize.define('State', {
        StateId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }, {
        tableName: 'State',
        timestamps: false
    });

    return State;
}