const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Score = sequelize.define('Score', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    final_score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    forms_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Score