import dotenv from "dotenv";
import { Sequelize } from "sequelize"
dotenv.config({});
const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
	logging: false,
	// logging: console.log,
	pool: {
		max: 50,
		min: 0,
		idle: 1000000,
		acquire: 1200000
	}
});

sequelize.authenticate()
    .then(() => {
        console.log("sequelize connected");
    })
    .catch(err => {
        console.log("Error" + err)
    })

sequelize.sync({
	alter: true
}).then(() => {
		console.log("yes re sync")
	}).catch(err => {
		console.log(err)
	})
export default sequelize