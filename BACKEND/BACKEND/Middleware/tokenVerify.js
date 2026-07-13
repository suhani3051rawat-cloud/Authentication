import jwt from 'jsonwebtoken';

export const verifyToken = async (req,res,next) =>{
  try {
    let token = req.cookies.token;
    if(!token){
       return res.json({
            message : "Token not found"
        });
    }
    jwt.verify(token, process.env.JWT_TOKEN,(error, data)=>{
        if(error){
            console.log(error)
            return res.json({
                message : error.message
            });
        }
        req.user = data;
        // res.json({
        //     message : "Token verified",
        // });
        next()
    })
  } 
  catch (error) {
        return res.json({
            message : "Something went wrong",
            error   : error
        });
  }
}