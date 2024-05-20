import React from 'react';
import { Equipment } from './Equipmet/Equipment';
import { Type } from './Type/Type';
import styles from './Filters.module.css';

export const Filters = () => {
  return (
    <div>
      <p className={styles.header_filters}>Filters</p>
      <div className={styles.container_filters}>
        <Equipment />
        <Type />
      </div>
    </div>
  );
};
