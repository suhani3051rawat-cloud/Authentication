import { ExpressValidator } from "express-validator";
import { body, validationResult} from "express-validator";

let result = [
        body("name").notEmpty().withMessage("name is required"),
        body("username").notEmpty().withMessage("username is required"),
        body("email").notEmpty().withMessage("email is empty"),
        body("password").notEmpty().isLength({min : 6}).withMessage("Password must be atleast 6 digit"),
        body("phone_number").isLength({max:10}).notEmpty().withMessage("Phone number must be 10 digits"),
        body("address").notEmpty().withMessage("address can't be empty"),
      (req, res, next)=>{
      let errors =  validationResult(req)
      try{
        if(!errors.isEmpty()){
            return res.json({
                message : "Enter valid details",
                err     : errors.array().map((e)=>e.msg)
            });
        } 
      }
      catch(err){
        return res.json({
            message : "user not registered",
            error   : errors  
        });
      }
    next()  
    }
    ]
 export {
    result,
 }