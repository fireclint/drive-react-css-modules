import React from 'react';
import styles from './Find.module.css';

const Card = ({ image, make }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt='/' />
      <p>{make}</p>
    </div>
  );
};

export default Card;
