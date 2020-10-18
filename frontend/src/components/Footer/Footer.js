import React from 'react';
import styles from './Footer.module.css'; 
const Footer = () => {
    return (
       <div className={styles.Footer}>
           <span>Copyright {new Date().getFullYear()} &copy; - Hello Contest </span>
           <span>Privacy policy </span>
           <span>Terms of use </span>
        </div>
    )
}
export default Footer;