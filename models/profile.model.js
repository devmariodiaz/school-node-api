const Sequelize = require('sequelize');
const State = require('./state')

module.exports = (sequelize, DataTypes) => {
    let Profile = sequelize.define('Profile', {
        ProfileId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Description: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        StateId: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'Profile',
        timestamps: false
    });

    Profile.associate = (models) => {
        Profile.belongsTo(models.State, {
            foreignKey: {fieldName: 'StateId'}
        })
    };

    return Profile;
}