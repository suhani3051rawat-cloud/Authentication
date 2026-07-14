import React from 'react'

export const userloginValidation = (data)=>{
    let errors = {}
    if(!data.email.trim()){
        errors.email = 'email is required';
    }
    if(!data.password.trim()){
        errors.password = 'password is required';
    }
    console.log(errors);
    return errors;
}