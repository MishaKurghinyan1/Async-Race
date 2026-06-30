import styles from './ListItem.module.css';
import Car from '@/assets/images/car.svg?react';

type ListItemProps = {
  position: number;
  car: { color: string };
  carName: string;
  raceCount: number;
  fastestRace: string;
};

export function ListItem({ position, car, carName, raceCount, fastestRace }: ListItemProps) {
  return (
    <div className={styles.listItem}>
      <h2 className={styles.itemDescription}>{position}</h2>
      <h2 className={styles.itemDescription}>
        <Car fill={car.color} width={50} />
      </h2>
      <h2 className={styles.itemDescription}>{carName}</h2>
      <h2 className={styles.itemDescription}>{raceCount}</h2>
      <h2 className={styles.itemDescription}>{fastestRace}</h2>
    </div>
  );
}
