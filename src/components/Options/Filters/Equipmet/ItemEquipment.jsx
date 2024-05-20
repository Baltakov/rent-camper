import React from 'react';
import styles from './Equipment.module.css';
import sprite from '../../../../img/svg/sprite.svg';

export const ItemEquipment = ({ spriteImg, content }) => {
  return (
    <li className={styles.item_equipment}>
      <svg className={styles.icon} width={32} height={32}>
        <use href={`${sprite}#${spriteImg}`}></use>
      </svg>
      <p className="list_item">{content}</p>
    </li>
  );
};
