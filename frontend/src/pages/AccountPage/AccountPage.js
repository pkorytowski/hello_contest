import React from 'react';
import {Header, PostContainer, Footer, Menu, UserStuff} from 'components'
import styles from './AccountPage.module.css';
const AccountPage = ({ isLogged, setLogged }) => {
    return (
        <div className={styles.AccountPage}>
          <Header/>
          <Menu/>
          <UserStuff isLogged={isLogged} setLogged={setLogged}/>
          <Footer/>
        </div>
      );
}
export default AccountPage;