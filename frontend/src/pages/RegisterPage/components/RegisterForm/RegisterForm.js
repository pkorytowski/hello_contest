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
    return (
        <form onSubmit={handleSubmit(handleRegister)} className={styles.RegisterForm}>
            <label><input ref={register} name="name" type="text" /></label>
            <label><input ref={register} name="surname" type="text" /></label>
            <label><input ref={register} name="born_date"  type="date" /></label>
            <label><input ref={register} name="mail"  type="text" /></label>
            <label><input ref={register} name="user_name" type="text" /></label>
            <label><input ref={register} name="password" type="text" /></label>
        <button type="submit">add</button>
        { isRegister ? <Redirect to="/login" /> : null  }
    </form>

    )
}
export default RegisterForm;