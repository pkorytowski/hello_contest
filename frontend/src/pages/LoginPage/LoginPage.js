import React from 'react';
import {Header, PostContainer, Footer, Menu, UserStuff} from 'components'
import{ LoginForm} from './components'
import styles from './LoginPage.module.css';
const LoginPage = () => {
    return (
    <div className={styles.LoginPage}>
        <Header/>
       <LoginForm/>
       <Footer/>
    </div>
    )
}
export default LoginPage;