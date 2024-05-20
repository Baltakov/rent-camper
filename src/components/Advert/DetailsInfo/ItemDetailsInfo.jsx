import React from 'react';
import styles from './DetailsInfo.module.css';
import sprite from '../../../img/svg/sprite.svg';

export const ItemDetailsInfo = ({ children }) => {
  if (children === 'airConditioner') {
    children = 'AC';
  } else if (!children) {
    return;
  }

  return (
    <li className={styles.item_details}>
      <svg className={styles.icon} width={32} height={32}>
        <use href={`${sprite}#${children}`}></use>
      </svg>
      <p className={styles.header_detail}>{children}</p>
    </li>
  );
};
