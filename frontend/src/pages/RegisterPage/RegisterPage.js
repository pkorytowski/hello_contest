import React from 'react';
import {Footer, Menu} from 'components'
import{ RegisterForm} from './components'
import styles from './RegisterPage.module.css';
const RegisterPage = () => {
    return (
    <div className={styles.RegisterPage}>
       <RegisterForm/>
       <Footer/>
    </div>
    )
}
export default RegisterPage;