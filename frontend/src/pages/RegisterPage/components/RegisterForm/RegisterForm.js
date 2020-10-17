import React, {useState} from 'react';
import styles from './RegisterForm.module.css';
import { useForm } from "react-hook-form";
import {Redirect} from "react-router-dom";
const RegisterForm = () => {
    const { register, handleSubmit} = useForm();
    const [isRegister, setRegister] = useState(false)
    const handleRegister= (data, e) => {
        console.log(data)
        e.target.reset()   
        setRegister(true)          
    }

    const register = async () => {
        const url = 'http://localhost:4000/register';
        const data = {Name: login, Password: password};

        const response = await fetch(url,{
            method: 'POST',
            credentials: 'omit',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        //console.log(response);
    }
    return (
<<<<<<< HEAD
        <form onSubmit={handleLogin} className={styles.RegisterForm}>
        <label><input type="text" value={login} onChange={e => setLogin(e.target.value)}/></label>
        <label><input type="text" value={password} onChange={e => setPassword(e.target.value)}/></label>
        <button type="submit" onClick={register}>add</button>
=======

        <form onSubmit={handleSubmit(handleRegister)} className={styles.RegisterForm}>
            <label>Name: <input ref={register} name="name" type="text" /></label><br/>
            <label>Surname: <input ref={register} name="surname" type="text" /></label><br/>
            <label>Your born date: <input ref={register} name="born_date"  type="date" /></label><br/>
            <label>Email: <input ref={register} name="email"  type="text" /></label><br/>
            <label>Nickname: <input ref={register} name="user_name" type="text" /></label><br/>
            <label>Password: <input ref={register} name="password" type="text" /></label><br/>
        <button type="submit">add</button>
        { isRegister ? <Redirect to="/login" /> : null  }
>>>>>>> main
    </form>

    )
}
export default RegisterForm;