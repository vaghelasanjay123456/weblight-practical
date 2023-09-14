import jwt, { decode } from "jsonwebtoken";
import AdminDB from "../model/admin.js"

export default async (req, res, next) => {
    try{
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const { id } = decoded;
        const userData = await AdminDB.findOne({ where:{id:id} });
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