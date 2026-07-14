import React from 'react';
import { Register } from '../Pages/Register';


export const UserRegisterValidation = (data) => {
    let errors = {};
        if(!data.name.trim()){
           errors.name = `Name is required`;
        }
        if(!data.username.trim()){
           errors.username = `username is required`;
        }
         if(!data.email.trim()){
           errors.email = `email is required`;
        }
         if(!data.phone_number.trim()){
           errors.phone_number = `Number is required`;
        }
         if(!data.address.trim()){
           errors.address = `address is required`;
        }
         if(data.password.trim() < 6){
           errors.password = "Password must be at least 6 characters";
        }
        return errors;
}