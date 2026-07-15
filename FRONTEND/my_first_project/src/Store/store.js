import { configureStore } from "@reduxjs/toolkit";
import userRegisterSlice from "./userRegisterSlice";
import userLoginSlice from "../Store/userLoginSlice";
import userLogoutSlice from "../Store/userLogoutSlice";

export const store = configureStore({
    reducer: {
        userRegister : userRegisterSlice,
        userLogin    : userLoginSlice,
        userLogout   : userLogoutSlice
    }
});