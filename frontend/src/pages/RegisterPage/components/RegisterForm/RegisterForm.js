import React, {useState} from 'react';
import styles from './RegisterForm.module.css';
import { useForm } from "react-hook-form";
import {Redirect} from "react-router-dom";
const RegisterForm = () => {
    const { register, handleSubmit} = useForm();
    const [isRegister, setRegister] = useState(false)
    const handleRegister = async (data, e) => {
        const url = 'http://localhost:4000/register';
        const response = await fetch(url,{
            method: 'POST',
            credentials: 'omit',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        console.log(response);
        e.target.reset()   
        setRegister(true)          
    }

    return (

        <form onSubmit={handleSubmit(handleRegister)} className={styles.RegisterForm}>
            <label>Name: <input ref={register} name="name" type="text" /></label><br/>
            <label>Surname: <input ref={register} name="surname" type="text" /></label><br/>
            <label>Your born date: <input ref={register} name="born_date"  type="date" /></label><br/>
            <label>Email: <input ref={register} name="email"  type="text" /></label><br/>
            <label>Nickname: <input ref={register} name="user_name" type="text" /></label><br/>
            <label>Password: <input ref={register} name="password" type="text" /></label><br/>
        <button type="submit">add</button>
        { isRegister ? <Redirect to="/login" /> : null  }
    </form>

    )
}
export default RegisterForm;