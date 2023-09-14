import express from "express"
const app = express()
import http from "http"
import bodyparser from "body-parser"
import morgan from "morgan"
import dbConfig from './api/config/database.js'
import * as indexModel from "./api/model/index.js";

// routes include goes here
import adminRoutes from './api/routes/admin.js'
import categoryRoutes from './api/routes/category.js'
import productRoutes from './api/routes/product.js'
import customerRoutes from './api/routes/customer.js'

app.use(morgan("dev"))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.get('/',async (req, res)=> {
    return res.status(200).send("Welcome")
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, GET, DELETE')
        return res.status(200).json({})
    }
    next()
})

// create routes group here
app.use('/api/admin', adminRoutes);
app.use('/api/category', categoryRoutes)
app.use('/api/product', productRoutes)
app.use('/api/customer', customerRoutes)

app.use(function(req, res, next){
    res.status(404).send("Sorry, page not found");
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message,
        },
    })
})

 const server = http.createServer(app)
 server.listen(process.env.PORT, () => {
    console.log(`server has been started ${process.env.PORT}`)
 })

 export default app