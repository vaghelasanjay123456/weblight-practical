import { Op } from "sequelize";
import ProductDB from "../model/product.js"
import CategoryDB from "../model/category.js"

export async function createProduct(productDetails){
    try{
        let result = await ProductDB.create(productDetails);
        return result
    }catch (error) {
        throw new Error(error);
    }
}


export async function productList(data){
    let matchObj = {}
    if (data.category) {
        matchObj.category_id = data.category
    }
    if (data.search) {
        matchObj.name = {
            [Op.like]: '%'+data.search+'%'
        }
    }
    if (data.min_price && data.max_price) {
        matchObj.price = {
            [Op.gte]: Number(data.min_price),
            [Op.lte]: Number(data.max_price)
        }
    }
    try {
        return await ProductDB.paginate({
            where: matchObj,
            include: [
                {
                    model: CategoryDB
                }
            ],
            paginate: parseInt(data.limit),
            page: parseInt(data.page)
        });
    } catch (error) {
        throw new Error(error);
    }
}