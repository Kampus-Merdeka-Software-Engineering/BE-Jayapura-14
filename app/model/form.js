const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Form = sequelize.define('Form', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    nama_lengkap: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    no_telp: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Form