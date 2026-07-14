import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { mongodb } from './dataBase/db.js';
// import crudOperation from './Routes/crudOperation.js1'; 
// import userRegisterRoute from "./Routes/userRegisterRoute.js";
// import userRoute from "./Routes/userRoute.js"
// import adminRoute from './Routes/adminRoute.js';
import cors from 'cors'
import userRegisterFromReactRoute from "./Routes/userRegisterFromReactRoute.js"

dotenv.config(); 
const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true}));

app.use(cookieParser());
app.use(express.json());
// app.use('/api',crudOperation);
// app.use('/api',userRegisterRoute);
// app.use('/api',userRoute);
// app.use('/admin',adminRoute);
app.use('/api/auth',userRegisterFromReactRoute);

export default app;    