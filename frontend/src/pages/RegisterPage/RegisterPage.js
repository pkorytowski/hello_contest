import React from 'react';
import {Header, PostContainer, Footer, Menu, UserStuff} from 'components'
import{ RegisterForm} from './components'
import styles from './RegisterPage.module.css';
const RegisterPage = () => {
    return (
    <div className={styles.RegisterPage}>
        <Header/>
       <RegisterForm/>
       <Footer/>
    </div>
    )
}
export default RegisterPage;