import React from 'react';
import styles from './UserStuff.module.css';
import {Link} from "react-router-dom";
const UserStuff = () => {
    return (
       <div className={styles.UserStuff}>
            <h4><Link to="/login">Login</Link></h4>
            <h4><Link to="/registration">Create account</Link></h4>     
        </div>
    )
}
export default UserStuff;