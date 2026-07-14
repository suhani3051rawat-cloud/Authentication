import { userFromReact, userLoginFromReact, userLogOut} from "../Controllers/userRegisterFromReactController.js";
import{ Router } from "express";
import { result } from "../Middleware/userRegsiterFromReactMiddleware.js";
import { getCurrentUser } from "../Controllers/userRegisterFromReactController.js";
import { verifyToken } from "../Middleware/tokenVerify.js";
let router = Router();

router.post('/user/register',result,userFromReact);
router.post('/user/login',userLoginFromReact);
router.post('/user/logout',userLogOut);
router.get('/user/me',verifyToken,getCurrentUser);
 
export default router;