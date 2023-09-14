import Sequelize from "sequelize";
import sequelize from "../config/database.js";
import sequelizePaginate from "sequelize-paginate";

const Product = sequelize.define(
    "product",
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
        category_id: {
            type: Sequelize.BIGINT,
        },
        price: {
            type: Sequelize.INTEGER,
        }
    },
    {
        tableName: 'products',
        timestamps: false,
    }
);

sequelizePaginate.paginate(Product);
export default Product;