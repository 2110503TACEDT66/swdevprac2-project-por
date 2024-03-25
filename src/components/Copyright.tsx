import React from 'react';
import styles from './copyright.module.css'

const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} POR Campground Booking Company . All rights reserved.</p>
    </footer>
  );
};

export default Copyright;
