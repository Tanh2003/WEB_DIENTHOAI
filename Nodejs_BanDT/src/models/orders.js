'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Orders extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

        }
    };
    Orders.init({

        receiver: DataTypes.STRING,
        order_date: DataTypes.DATE,
        order_status: DataTypes.STRING,
        receiving_point: DataTypes.STRING,
        total_value: DataTypes.DECIMAL,
        note: DataTypes.TEXT,
        order_idUser: DataTypes.INTEGER,


    }, {
        sequelize,
        modelName: 'Orders',
    });
    return Orders;
};