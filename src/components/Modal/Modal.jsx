import React, { useEffect, useState } from 'react';
import styles from './Modal.module.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RentForm } from 'components/Forms/RentForm';
import { Reviews } from './Reviews';
import { Features } from './Features';
import sprite from '../../img/svg/sprite.svg';

export const Modal = ({ toggleModal, offer }) => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('features');

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [toggleModal, navigate]);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  const handleCloseButtonClick = () => {
    toggleModal();
  };

  const handleSwitchButton = buttonName => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };

  const Line = styled.div`
    left: 0;
    bottom: 12px;
    width: 100%;
    height: 1px;
    background-color: rgba(16, 24, 40, 0.2);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.name_wrapper}>
          <h2>{offer.name}</h2>
          <span
            onClick={handleCloseButtonClick}
            className={styles.button_close}
          >
            <svg className={styles.icon_close} width={32} height={32}>
              <use href={`${sprite}#icon-close`}></use>
            </svg>
          </span>
        </div>
        <div className={styles.secondary_info}>
          <span>
            {offer.rating}({offer.reviews.length} Reviews)
          </span>
          <span>{offer.location}</span>
        </div>
        <h2>€{offer.price.toFixed(2)}</h2>
        <div className={styles.gallery_advert}>
          {offer.gallery.map(photo => (
            <img
              //   Not unique objects
              className={styles.photo_advert}
              src={photo}
              alt={offer.name}
              width={290}
              height={310}
            />
          ))}
        </div>
        <p className={styles.description_advert}>{offer.description}</p>
        <div className={styles.button_wrapper}>
          <button
            className={`${styles.button_features}  ${
              activeButton === 'features' && styles.active
            }`}
            onClick={() => handleSwitchButton('features')}
          >
            Features
          </button>
          <button
            className={`${styles.button_rewievs} ${
              activeButton === 'reviews' && styles.active
            }`}
            onClick={() => handleSwitchButton('reviews')}
          >
            Rewievs
          </button>
        </div>
        <Line />
        <div className={styles.bottom_wrapper}>
          {activeButton === 'features' && <Features offer={offer} />}
          {activeButton === 'reviews' && <Reviews reviews={offer.reviews} />}
          <RentForm offer={offer} toggleModal={toggleModal} />
        </div>
      </div>
    </div>
  );
};
