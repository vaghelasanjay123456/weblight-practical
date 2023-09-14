import * as categoryService from "../services/category.js"
import * as Helper from "../helper/index.js"

export const createCategory = async (req, res) => {
    try {
        await categoryService.createCategory(req.body);
        return res.status(201).send({
            status: 201,
            message: "Category created successfully"
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
    try{
        let result = await categoryService.categoryList(data)
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

export async function update(req, res){
    try{
    let updateObj = {
        name: req.body.name,
        description: req.body.description
      }
      let result = await categoryService.update(updateObj, req.params.id)
      return res.status(200).send({
        message: "Update successfully",
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

export async function destroy(req, res){
    try{
        let result = categoryService.destroy(req.params.id)
        return res.status(202).send({
            message:"delete successfully"
        })
    }catch (err) {
        Helper.writeErrorLog(req, err);
        return res.status(500).send({
            message: 'Error occurred, Please try again later',
            error: err,
        })
    }
}

