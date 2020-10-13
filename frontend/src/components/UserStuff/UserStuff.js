import React from 'react';
import styles from './UserStuff.module.css';
import {Link} from "react-router-dom";
const UserStuff = ({isLogged}) => {
    console.log({isLogged})
    let display
    if (isLogged=== false){
        display = <><Link to="/login">Login</Link><br/>
            <Link to="/registration">Create account</Link>
            </>
    }
    else{
        display = <><Link to="/account">account</Link><br/>
        <Link to="/logout">logout</Link>
        </>
    }
    return (
       <div className={styles.UserStuff}>
            {display}
        </div>

    )
}
export default UserStuff;