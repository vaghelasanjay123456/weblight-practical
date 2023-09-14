import * as productService from "../services/product.js"
import * as Helper from "../helper/index.js"

export const createProduct = async (req, res) => {
    try {
        await productService.createProduct(req.body);
        return res.status(201).send({
            status: 201,
            message: "Product created successfully"
        })
    }catch (err) {
            Helper.writeErrorLog(req, err);
            return res.status(500).send({
            message: err.message ? err.message : 'Error occurred, Please try again later',
            error: err,
        })
    }
}

export async function list(req, res){
    let data = req.query
    if ([null, undefined, 0, ''].includes(data.page)) {
        data.page = 1
    }
    if ([null, undefined, 0, ''].includes(data.limit)) {
        data.limit = process.env.PAGINATE_LIMIT
    }
    if ([null, undefined, ''].includes(data.search)) {
        data.search = ''
    }
    try{
        let result = await productService.productList(data)
        return res.status(200).send({
            message: "success",
            result: result
          })
    }catch (err) {
            Helper.writeErrorLog(req, err);
            return res.status(500).send({
            message: 'Error occurred, Please try again later',
            error: err,
        })
    }
}