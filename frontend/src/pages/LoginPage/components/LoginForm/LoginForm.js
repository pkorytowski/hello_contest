import React, {useState} from 'react';
import styles from './LoginForm.module.css';
import { useForm } from "react-hook-form";
import {Redirect} from "react-router-dom";
const LoginForm = () => {
    const { register, handleSubmit} = useForm();
    const [isLogin, setLoggin] = useState(false)
    const handleLogin = (data, e) => {
        console.log(data)
        setLoggin(true)
        e.target.reset();
   
    }
    return (
    <>
        <form onSubmit={handleSubmit(handleLogin)} className={styles.LoginForm}>
            <label><input ref={register} name="user_name" type="text" /></label>
            <label><input ref={register} name="password" type="text" /></label>
            <button type="submit" >add</button>      
        </form>
        { isLogin ? <Redirect to="/" /> : null  }
    </> 
    )
}
export default LoginForm;