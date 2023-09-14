import Sequelize from "sequelize";
import sequelize from "../config/database.js";
import sequelizePaginate from "sequelize-paginate";

const Admin = sequelize.define(
    "admin",
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
        },
        phone: {
            type: Sequelize.STRING,
        }
    },
    {
        tableName: 'admin',
        timestamps: false,
    }
);

sequelizePaginate.paginate(Admin);
export default Admin;
