import { configureStore } from "@reduxjs/toolkit";
import userRegisterSlice from "./userRegisterSlice";
import userLoginSlice from "../Store/userLoginSlice";
import userLogoutSlice from "./userLogout";
import getCurrentUserSlice from '../Store/getCurrentUserSlice';

export const store = configureStore({
    reducer: {
        userRegister   : userRegisterSlice,
        userLogin      : userLoginSlice,
        userLogout     : userLogoutSlice,
        getCurrentUser : getCurrentUserSlice
    }
});