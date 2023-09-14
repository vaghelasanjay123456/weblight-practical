import { Router } from "express"
const router = Router()
import MakeRequest from '../middleware/make-request.js'
import * as ctrlCustomer from "../controller/customer.js"
import customerCheckAuth from '../middleware/customer-check-auth.js'
import adminCheckAuth from '../middleware/admin-check-auth.js'
import  { createCustomerValidator, loginCustomerValidator } from "../middleware/validator.js"

router.post("/signup", MakeRequest, createCustomerValidator, ctrlCustomer.signup)
router.post("/login", MakeRequest, loginCustomerValidator, ctrlCustomer.login)
router.post("/auth", MakeRequest, customerCheckAuth, ctrlCustomer.auth)
router.get("/list", MakeRequest, adminCheckAuth, ctrlCustomer.list)

export default router