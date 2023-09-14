import { Router } from "express"
const router = Router()
import MakeRequest from '../middleware/make-request.js'
import * as ctrlCategory from "../controller/category.js"
import * as validator from "../middleware/validator.js"

router.post("/create", MakeRequest, validator.createCategoryValidator, ctrlCategory.createCategory)
router.get("/list", MakeRequest,  ctrlCategory.list)
router.put("/:id", MakeRequest,ctrlCategory.update)
router.delete("/:id", MakeRequest,ctrlCategory.destroy)

export default router