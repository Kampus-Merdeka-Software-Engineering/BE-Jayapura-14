const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Nama = sequelize.define('nama', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    }
});

module.exports = Nama
