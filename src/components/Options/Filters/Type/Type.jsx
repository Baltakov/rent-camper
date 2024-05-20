import React from 'react';
import styles from './Type.module.css';
import { ItemType } from './ItemType';

const typesTrack = [
  { id: 1, name: 'Van', spriteImg: 'van' },
  { id: 2, name: 'Fully Integrated', spriteImg: 'fully_integrated' },
  { id: 3, name: 'Alcove', spriteImg: 'alcove' },
];

export const Type = () => {
  return (
    <div className={styles.container_type}>
      <h2>Vehicle type</h2>
      <hr />
      <ul className={styles.list_type}>
        {typesTrack.map(({ spriteImg, name, id }) => (
          <ItemType key={id} spriteImg={spriteImg} content={name} />
        ))}
      </ul>
    </div>
  );
};
<svg
  className={styles.icon_type}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 40 28"
  fill="none"
></svg>;
