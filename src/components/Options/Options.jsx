import React from 'react';
import { Location } from './Location/Location';
import styles from './Options.module.css';
import { Filters } from './Filters/Filters';

export const Options = () => {
  return (
    <div className={styles.container_options}>
      <Location />
      <Filters />
      <button className={styles.button_search}>Search</button>
    </div>
  );
};
