import React, {useState} from 'react';
import styles from './LoginForm.module.css';
import { useForm } from "react-hook-form";
import {Redirect} from "react-router-dom";
const LoginForm = ({setLogged}) => {
    const { register, handleSubmit} = useForm();
    const [isLogin, setLoggin] = useState(false)
    const handleLogin = (data, e) => {
        console.log(data)
        setLoggin(true)
        e.target.reset();
        setLogged(true)
    }
    return (
    <>
        <form onSubmit={handleSubmit(handleLogin)} className={styles.LoginForm}>
        <h3 className={styles.rform}>Login Form</h3>
            <label>Login</label>
            <input ref={register} name="user_name" type="text" />
            <label>Password</label>
            <input ref={register} name="password" type="text" />
            <button type="submit" className={styles.register}>add</button>      
        </form>
        { isLogin ? <Redirect to="/" /> : null  }
    </> 
    )
}
export default LoginForm;