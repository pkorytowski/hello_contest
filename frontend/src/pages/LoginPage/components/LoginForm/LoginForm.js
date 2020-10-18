import React, {useState} from 'react';
import styles from './LoginForm.module.css';
import { useForm } from "react-hook-form";
import {Redirect} from "react-router-dom";
const LoginForm = ({setLogged}) => {
    const { register, handleSubmit} = useForm();
    const [isLogin, setLoggin] = useState(false)
    const handleLogin = async (data, e) => {
        const url = 'http://localhost:4000/login';
        const response = await fetch(url,{
            method: 'POST',
            credentials: 'omit',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        console.log(response.json());
    }
    return (
    <>
        <form onSubmit={handleSubmit(handleLogin)} className={styles.LoginForm}>
            <label><input ref={register} name="email" type="text" /></label>
            <label><input ref={register} name="password" type="text" /></label>
            <button type="submit" >add</button>      
        </form>
        { isLogin ? <Redirect to="/" /> : null  }
    </> 
    )
}
export default LoginForm;