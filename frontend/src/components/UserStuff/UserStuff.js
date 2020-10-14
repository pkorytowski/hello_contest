import React from 'react';
import styles from './UserStuff.module.css';
import {Link} from "react-router-dom";
const UserStuff = ({isLogged, setLogged}) => {
    const logout = () =>{
        // add connection with database
        setLogged(false)
    }
    let display
    if (isLogged=== false){
        display = <><Link to="/login">Login</Link><br/>
            <Link to="/registration">Create account</Link>
            </>
    }
    else{
        display = <><Link to="/account">account</Link><br/>
        <p onClick = {logout}>logout</p>
        </>
    }
    return (
       <div className={styles.UserStuff}>
            {display}
        </div>

    )
}
export default UserStuff;