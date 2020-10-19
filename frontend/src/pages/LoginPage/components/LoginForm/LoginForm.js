import React, {useEffect, useState} from 'react';
import styles from './LoginForm.module.css';
import { useForm } from "react-hook-form";
import {Redirect} from "react-router-dom";


const LoginForm = ({setLogged, setPopupState, setPopupText}) => {
    const { register, handleSubmit} = useForm();
    const [isLogin, setLoggin] = useState(false);
    const [redirect, setRegister] = useState(false);

   
       
    const handleLogin = async (data, e) => {
        const url = 'http://localhost:4000/login';
        const response = await fetch(url,{
            method: 'POST',
            credentials: 'omit',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        
        if(!response.ok){
            response.text().then((response)=>{
                setPopupState(true);
                setPopupText(response);
            })
            
        }
        else{
            setLogged(true);
            setLoggin(true);
        }
        console.log(response)
        
    }


    if (redirect) return ;
    return (
    <>
        <form onSubmit={handleSubmit(handleLogin)} className={styles.LoginForm}>
        <h3 className={styles.rform}>Login Form</h3>
            <label>Email</label>
            <input ref={register} name="email" type="email" />
            <label>Password</label>
            <input ref={register} name="password" type="password" />
            <button type="submit" className={styles.register}>add</button>      
        </form>
        {isLogin ? <Redirect to="/"/> : null}
    </> 
    )
}
export default LoginForm;