import { Router } from "express"
const router = Router()
import MakeRequest from '../middleware/make-request.js'
import * as ctrlAdmin from "../controller/admin.js"
import adminCheckAuth from '../middleware/admin-check-auth.js'
import  { createAdminValidator, loginAdminValidator } from "../middleware/validator.js"

router.post("/signup", MakeRequest, createAdminValidator, ctrlAdmin.signup)
router.post("/login", MakeRequest, loginAdminValidator, ctrlAdmin.login)
router.get("/auth", MakeRequest, adminCheckAuth, ctrlAdmin.auth)

export default router