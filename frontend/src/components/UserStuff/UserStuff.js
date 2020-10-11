import React from 'react';
import styles from './UserStuff.module.css';
import {Link} from "react-router-dom";
const UserStuff = () => {
    return (

       <a className={styles.UserStuff}>
            <Link to="/login">Login</Link><br/>
            <Link to="/registration">Create account</Link>    
        </a>

    )
}
export default UserStuff;