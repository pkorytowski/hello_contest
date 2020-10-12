import React from 'react';
import styles from './UserStuff.module.css';
import {Link} from "react-router-dom";
const UserStuff = () => {
    return (

       <div className={styles.UserStuff}>
            <Link to="/login">Login</Link><br/>
            <Link to="/registration">Create account</Link>    
        </div>

    )
}
export default UserStuff;