import React, {useState} from 'react';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        console.log({login, password})
        if (!login || !password)
            return;
        setLogin('')
        setPassword('')
        
    }

    const register = async () => {
        const url = 'http://localhost:4000/register';
        const data = {Name: login, Password: password};

        const response = await fetch(url,{
            method: 'POST',
            credentials: 'omit',
            headers: {'Content-Type': 'application/json'},
            body: {name: "login", password: "password"}
        });
        //console.log(response);
    }
    return (
        <form onSubmit={handleLogin} className={styles.RegisterForm}>
        <label><input type="text" value={login} onChange={e => setLogin(e.target.value)}/></label>
        <label><input type="text" value={password} onChange={e => setPassword(e.target.value)}/></label>
        <button type="submit" onClick={register}>add</button>
    </form>

    )
}
export default RegisterForm;