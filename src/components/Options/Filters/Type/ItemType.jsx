import React from 'react';
import styles from './Type.module.css';
import sprite from '../../../../img/svg/sprite.svg';

export const ItemType = ({ spriteImg, content }) => {
  return (
    <li className={styles.item_type}>
      <svg className={styles.icon_type}>
        <use href={`${sprite}#${spriteImg}`}></use>
      </svg>
      <p className="list_item">{content}</p>
    </li>
  );
};
