import React from 'react';
import styles from './Home.module.css';
import { Link, useLocation } from 'react-router-dom';
import { Header } from 'components/Header/Header';

const Home = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="content_container">
        {' '}
        <div className={styles.hero}>
          <section className={styles.container}>
            <h1 className={styles.heading}>
              Discover Your Next Adventure with CampingTruck Rentals
            </h1>
            <div className={styles.home_content_wrapper}>
              <span className={styles.paragraph}>
                <p className={styles.title}>
                  Dreaming of a getaway? CampingTruck Rentals is your ticket to
                  unforgettable adventures!
                </p>
                <ul className={styles.advantages}>
                  <li>
                    <p>Discover:</p>
                    <div className={styles.block}>
                      <p>The beauty of the wilderness</p>
                      <p>The thrill of the open road</p>
                      <p>The serenity of beachside bliss</p>
                    </div>
                  </li>
                  <li>
                    <p>Travel: </p>
                    <div className={styles.block}>
                      <p>Wherever your heart desires </p>
                      <p>Whenever the wanderlust strikes</p>
                      <p>In comfort and style</p>
                    </div>
                  </li>
                  <li>
                    <p>Our campervans:</p>
                    <div className={styles.block}>
                      <p>Fully equipped for your journey </p>
                      <p>Designed for a comfortable stay</p>
                      <p>Practical kitchenettes</p>
                    </div>
                  </li>
                </ul>
                <p className={styles.call}>
                  Start your adventure today! Choose your van, book it, and hit
                  the road! Don't miss out on making your trip unforgettable!
                </p>
              </span>
            </div>
            <div className={styles.button_start_wrapper}>
              <Link
                to={`/catalog`}
                state={{ from: location }}
                className={styles.button_start}
              >
                Start Your Adventure
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
