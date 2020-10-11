import React from 'react';
import {Header, PostContainer, Footer, Menu, UserStuff} from 'components'
import styles from './HomePage.module.css';
const HomePage = () => {
    return (
        <div className={styles.HomePage}>
          <Header/>
          <Menu/>
          <PostContainer/>
          <UserStuff/>
          <Footer/>
        </div>
      );
}
export default HomePage;