import jwt, { decode } from "jsonwebtoken";
import CustomerDB from "../model/customer.js"

export default async (req, res, next) => {
    try{
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const { id } = decoded;
        const userData = await CustomerDB.findOne({ where:{id:id} });
        if(userData == null){
            return res.status(401).json({
               message: "Auth Fail" 
            })
            
        }
        req.userData = userData
        next();
    }catch (err) {
        return res.status(401).json({
          message: "Auth fail",
        });
      }
}