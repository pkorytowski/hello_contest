import React, {useState} from 'react';
import { LoginPopupItem, LoginPopupItemInner, LoginPopupItemButton, LoginPopupItemHeader } from './LoginPopup.css';



const LoginPopup = ({ setPopupState, popupText }) => {

    const closePopup = () => {
        setPopupState(false);
    }
    return (
    <>
        <LoginPopupItem> 
            <LoginPopupItemInner>  
                <LoginPopupItemHeader>{popupText}</LoginPopupItemHeader>  
                <LoginPopupItemButton onClick={closePopup}>close me</LoginPopupItemButton>  
            </LoginPopupItemInner>  
        </LoginPopupItem>  
    </>
    )
}

export default LoginPopup;