import { useState } from 'react';
import { useCars } from '@/hooks/useCars';

import { Road } from '../Road';
import Frame from '../Frame/Frame';
import { TextInput } from '../TextInput';

import type { Car } from '@/types/car.types';

import styles from './Garage.module.css';
import { useGetPage, useTurnPage } from '@/store/usePageChange';

export function Garage() {
  const [createColor, setCreateColor] = useState('');
  const [updateColor, setUpdateColor] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError, error } = useCars(currentPage);

  const LIMIT = 7;
  const page = useGetPage();
  const turnPage = useTurnPage();

  const totalCount = data?.totalCount ?? 0;
  const isLastPage = page * LIMIT >= totalCount;

  if (isLoading) {
    return <div className="loading-spinner">Loading garage tracks...</div>;
  }

  if (isError) {
    return <div className="error-banner">Ops, something went wrong: {error.message}</div>;
  }

  return (
    <>
      <section className={styles['full-race']}>
        <div className={styles.inputsContainer}>
          <div className={styles.racingButtons}>
            <button className={styles.button} onClick={() => {}}>
              Start
            </button>
            <button className={styles.button} onClick={() => {}}>
              Stop
            </button>
          </div>
          <div className={styles.editor}>
            <div className={styles.inputGroup}>
              <TextInput placeholder="Create car name" />
              <input
                type="color"
                defaultValue="#f00"
                onChange={(e) => setCreateColor(e.target.value)}
                required
              />
            </div>
            <button className={styles.button} onClick={create}>
              Create Car
            </button>
          </div>
          <div className={styles.editor}>
            <div className={styles.inputGroup}>
              <TextInput placeholder="Update car name" />
              <input
                type="color"
                defaultValue="#f00"
                onChange={(e) => setUpdateColor(e.target.value)}
                required
              />
            </div>
            <button className={styles.button} onClick={update}>
              Update Car
            </button>
          </div>
          <button className={styles.button + ' ' + styles.generate} onClick={() => {}}>
            Generate Cars
          </button>
        </div>

        <Frame>
          <article className={styles['race']}>
            <article className={styles['race-container']}>
              <article className={styles.roads}>
                {data ? (
                  data.cars.map((car: Car) => (
                    <Road key={car.id} id={car.id} name={car.name} color={car.color} />
                  ))
                ) : (
                  <div>
                    <h2>No Cars</h2>
                  </div>
                )}
              </article>
              <article className={styles['finish-line']}></article>
            </article>
          </article>
          <article className={styles.nav}>
            <button
              onClick={() => turnPage(-1)}
              disabled={page === 1}
              className={styles['turn-page']}
            >
              &#60;
            </button>
            <p>PAGES</p>
            <button
              type="button"
              onClick={() => turnPage(1)}
              disabled={isLastPage || isLoading}
              className={styles['turn-page']}
            >
              &#62;
            </button>
          </article>
        </Frame>
      </section>
    </>
  );
}

function create() {
  console.log('Create button clicked');
}

function update() {
  console.log('Update button clicked');
}
