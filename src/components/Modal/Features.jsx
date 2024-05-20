import { DetailsInfo } from 'components/Advert/DetailsInfo/DetailsInfo';
import React from 'react';
import styles from './Modal.module.css';

export const Features = ({ offer }) => {
  return (
    <div className={styles.venhicle_container}>
      <DetailsInfo
        details={offer.details}
        adults={offer.adults}
        engine={offer.engine}
        transmission={offer.transmission}
      />
      <div>
        <h3 className={styles.venhicle_header}>Vehicle details</h3>
        <hr />
      </div>
      <ul className={styles.venhicle_list}>
        <li className={styles.venhicle_item}>
          <p>Form</p>
          <p>{offer.form}</p>
        </li>
        <li className={styles.venhicle_item}>
          <p>Length</p>
          <p>{offer.length}</p>
        </li>
        <li className={styles.venhicle_item}>
          <p>Width</p>
          <p>{offer.width}</p>
        </li>
        <li className={styles.venhicle_item}>
          <p>Height</p>
          <p>{offer.height}</p>
        </li>
        <li className={styles.venhicle_item}>
          <p>Tank</p>
          <p>{offer.tank}</p>
        </li>
        <li className={styles.venhicle_item}>
          <p>Consumption</p>
          <p>{offer.consumption}</p>
        </li>
      </ul>
    </div>
  );
};
