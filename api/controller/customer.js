import * as customerService from "../services/customer.js"
import * as Helper from "../helper/index.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function signup(req, res){
    try{
        let {name, email, password} = req.body
        let checkEmail = await customerService.checkEmail(email)
        if(checkEmail) {
            return res.status(409).send({
                message:"email already exit"
            })
        }
        password = await bcrypt.hash(password, 10)
        let createObj = {
            name: name,
            email: email,
            password: password
        }

        let result = await customerService.signup(createObj)

        const token = jwt.sign({
            email: result.email,
            id: result.id
        },
        process.env.JWT_KEY,
        {
            expiresIn: "10d",
        }
        );

        result = JSON.stringify(result)
        result = JSON.parse(result)
        result.token = token
        return res.status(201).send({
            message:"Customer created successfully",
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

export async function login(req, res){
    try{
        let {email, password} = req.body
        let checkEmail = await customerService.checkEmail(email)
        if(checkEmail == null || checkEmail == '' || checkEmail == undefined) {
            return res.status(409).send({
                message:"Invalid credential"
            })
        }
        const passwordCheck = await bcrypt.compare(password, checkEmail.password);
        if(passwordCheck === false){
            return res.status(409).send({
                message:"invalid password"
            })
        }

        const token = jwt.sign(
            {
            email: checkEmail.email,
            id: checkEmail.id,
            name: checkEmail.name
            },
            process.env.JWT_KEY,
            {
                expiresIn: "10d",
            }

        );
        checkEmail = JSON.stringify(checkEmail)
        checkEmail = JSON.parse(checkEmail)
        checkEmail.token = token
        return res.status(200).send({
            message:"login successfully",
            result: checkEmail
        })
    }catch (err) {
        Helper.writeErrorLog(req, err);
        return res.status(500).send({
            message: 'Error occurred, Please try again later',
            error: err,
        })
    }
}

export async function auth(req, res){
    try{
        return res.status(200).send({
            message:"success",
            result: req.userData    
        })
    }catch (err) {
            Helper.writeErrorLog(req, err);
            return res.status(500).send({
            message: 'Error occurred, Please try again later',
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
        let result = await customerService.customerList(data)
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