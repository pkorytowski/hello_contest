import React from 'react';
import {Footer} from 'components'
import{ LoginForm} from './components'
import styles from './LoginPage.module.css';
const LoginPage = ({setLogged}) => {
    return (
    <div className={styles.LoginPage}>
       <LoginForm setLogged={setLogged}/>
       <Footer/>
    </div>
    )
}
export default LoginPage;