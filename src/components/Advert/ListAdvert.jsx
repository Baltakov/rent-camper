import React from 'react';
import styles from './Advert.module.css';
import { ItemAdvert } from './ItemAdvert';

export const ListAdvert = ({ adverts }) => {
  return (
    <ul className={styles.container_advert}>
      {adverts.map(obj => (
        <ItemAdvert key={obj.id} offer={obj} />
      ))}
    </ul>
  );
};
