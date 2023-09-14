import Sequelize from "sequelize";
import sequelize from "../config/database.js";
import sequelizePaginate from "sequelize-paginate";

const Customer = sequelize.define(
    "Customer",
    {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        }
    },
    {
        tableName: 'customer',
        timestamps: false,
    }
);

sequelizePaginate.paginate(Customer);
export default Customer;