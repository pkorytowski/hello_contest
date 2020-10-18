import React, {useState} from 'react';
import styles from './RegisterForm.module.css';
import { useForm } from "react-hook-form";
import {Link, Redirect, useHistory} from "react-router-dom";
const RegisterForm = () => {
    const { register, handleSubmit, formState} = useForm();
    const [isRegister, setRegister] = useState(false)
    const {dirtyFields} = formState
    const { push } = useHistory()
    const handleRegister= (data, e) => {
        
        // console.log(Object.keys(dirtyFields).length)
        e.target.reset()   
        setRegister(true)          
    }

    const numberOfInputsInForm = () => {
        try{
             return document.forms[0].getElementsByTagName('input').length !== Object.keys(dirtyFields).length
        }
        catch (err){
            return true
        }

    }
    return (

        <form onSubmit={handleSubmit(handleRegister)} className={styles.RegisterForm}>
            <h3 className={styles.rform}>Registration Form</h3>
            <label >Name </label>
            <input ref={register} name="name" type="text" /><br/>
            <label>Surname</label>
            <input ref={register} name="surname" type="text" /><br/>
            <label>Your born date:</label>
            <input ref={register} name="born_date"  type="date" /><br/>
            <label>Email</label>
            <input ref={register} name="email"  type="text" /><br/>
            <label>Nickname</label>
            <input ref={register} name="user_name" type="text" /><br/>
            <label>Password </label>
            <input ref={register} name="password" type="password" /><br/>
        <div className={styles.btn}>
        <button type="button" className={styles.register} onClick={() => push('/')}>To main</button>
        <button type="submit" className={styles.register} disabled={numberOfInputsInForm()} >register now</button>
        </div>
        
        { isRegister ? <Redirect to="/login" /> : null  }
    </form>

    )
}
export default RegisterForm;