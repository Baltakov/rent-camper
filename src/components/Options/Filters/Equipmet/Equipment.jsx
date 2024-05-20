import React from 'react';
import { ItemEquipment } from './ItemEquipment';
import styles from './Equipment.module.css';

const equipmentTrack = [
  {
    detail: 'airConditioner',
    name: 'AC',
    id: '1',
  },
  {
    detail: 'bathroom',
    name: 'Bathroom',
    id: '2',
  },
  {
    detail: 'kitchen',
    name: 'Kitchen',
    id: '3',
  },
  {
    detail: 'beds',
    name: 'Beds',
    id: '4',
  },
  {
    detail: 'TV',
    name: 'TV',
    id: '5',
  },
  {
    detail: 'CD',
    name: 'CD',
    id: '6',
  },
  {
    detail: 'radio',
    name: 'Radio',
    id: '7',
  },
  {
    detail: 'shower',
    name: 'Shower',
    id: '8',
  },
  {
    detail: 'toilet',
    name: 'Toilet',
    id: '9',
  },
  {
    detail: 'freezer',
    name: 'Freezer',
    id: '10',
  },
  {
    detail: 'hob',
    name: 'Hob',
    id: '11',
  },
  {
    detail: 'microwave',
    name: 'Microwave',
    id: '12',
  },
];

export const Equipment = () => {
  return (
    <div className={styles.container_equipment}>
      <h2>Vehicle equipment</h2>
      <hr />
      <ul className={styles.list_equipment}>
        {equipmentTrack.map(({ name, id, detail }) => (
          <ItemEquipment key={id} content={name} spriteImg={detail} />
        ))}
      </ul>
    </div>
  );
};
