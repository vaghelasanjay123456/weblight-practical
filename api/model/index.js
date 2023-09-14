import { readdirSync } from "fs"
import { basename, dirname } from "path"
import { fileURLToPath } from "url"


import AdminDB from "./admin.js"
import CategoryDB from "./category.js"
import ProductDB from "./product.js"
import CustomerDB from "./customer.js"

ProductDB.belongsTo(CategoryDB, {foreignKey: 'category_id'})
