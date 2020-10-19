import React, { useState } from 'react';
import { Footer } from 'components'
import{ LoginForm } from './components'
import styles from './LoginPage.module.css';
import LoginPopup from './components/LoginPopup';




const LoginPage = ({setLogged}) => {

    const [showPopup, setPopupState] = useState(false);
    const [popupText, setPopupText] = useState('');
    
    

    return (
    <div className={styles.LoginPage}>
        {showPopup ? 
            <LoginPopup setPopupState={setPopupState} popupText={popupText}/>
        : null
        }
       <LoginForm 
            setLogged={setLogged} 
            setPopupState={setPopupState} 
            setPopupText={setPopupText}
       />
       <Footer/>
    </div>
    )
}
export default LoginPage;