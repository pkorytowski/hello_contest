import React from 'react';
import {Header, PostContainer, Footer, Menu, UserStuff} from 'components'
import styles from './HomePage.module.css';
const HomePage = ({ isLogged, setLogged }) => {
    return (
        <div className={styles.HomePage}>
          <Header/>
          <Menu/>
          <PostContainer/>
          <UserStuff isLogged={isLogged} setLogged={setLogged}/>
          <Footer/>
        </div>
      );
}
export default HomePage;