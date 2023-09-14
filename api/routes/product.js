import { Router } from "express"
const router = Router()
import MakeRequest from '../middleware/make-request.js'
import * as ctrlProduct from "../controller/product.js"
import * as validator from "../middleware/validator.js"

router.post("/create", MakeRequest, validator.createProductValidator, ctrlProduct.createProduct)
router.get("/list", MakeRequest, ctrlProduct.list)

export default router