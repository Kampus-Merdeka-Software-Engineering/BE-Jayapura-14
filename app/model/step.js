const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Step = sequelize.define('Step', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    }
});

module.exports = Step
