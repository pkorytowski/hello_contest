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
    return (
        <form onSubmit={handleLogin} className={styles.RegisterForm}>
        <label><input type="text" value={login} onChange={e => setLogin(e.target.value)}/></label>
        <label><input type="date" value={password} onChange={e => setPassword(e.target.value)}/></label>
        <button type="submit">add</button>
    </form>

    )
}
export default RegisterForm;