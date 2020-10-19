import styled from 'styled-components';

export const LoginPopupItem = styled.div `
    position: fixed;  
    width: 100%;  
    height: 100%;  
    top: 0;  
    left: 0;  
    right: 0;  
    bottom: 0;  
    margin: auto;  
    background-color: rgba(0,0,0, 0.5);
`;

export const LoginPopupItemInner = styled.div `
    position: absolute;  
    left: 25%;  
    right: 25%;  
    top: 25%;  
    bottom: 25%;  
    margin: auto;  
    border-radius: 20px;  
    background: white;
    text-align: center; 
    
`;

export const LoginPopupItemHeader = styled.h1 `
    color: black;
    width: 100%;
    height: 50px;
    margin: auto;
`;

export const LoginPopupItemButton = styled.button `
    background-color: red;
    height: 20px;
`;