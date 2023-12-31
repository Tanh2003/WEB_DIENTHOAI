'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Sale extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Sale.hasMany(models.Products, { foreignKey: 'idSale', as: 'idSale' })
        }
    };
    Sale.init({
        sale_date: DataTypes.DATE,
        quantity: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Sales',
    });
    return Sale;
};