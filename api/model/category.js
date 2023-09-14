import Sequelize from "sequelize";
import sequelize from "../config/database.js";
import sequelizePaginate from "sequelize-paginate";

const Category = sequelize.define(
    "Categoty",
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
        description: {
            type: Sequelize.STRING,
        }
    },
    {
        tableName: 'category',
        timestamps: false,
    }
);

sequelizePaginate.paginate(Category);
export default Category;