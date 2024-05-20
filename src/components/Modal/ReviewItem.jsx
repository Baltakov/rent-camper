import React from 'react';
import styes from './Modal.module.css';

export const ReviewItem = ({ reviewer }) => {
  return (
    <li className={styes.reviewev_item}>
      <div className={styes.reviewer_item_wrapper}>
        {reviewer.photo ? (
          <img src={reviewer.photo} alt={reviewer.reviewer_name} />
        ) : (
          <span className={styes.reviewer_without_prhoto}>
            {reviewer.reviewer_name[0].toUpperCase()}
          </span>
        )}
        <div className={styes.reviewer_info}>
          <h3 className={styes.reviewer_name}>{reviewer.reviewer_name}</h3>
          <ul className={styes.reviewer_rating_wrapper}>
            <li
              className={
                Number(reviewer.reviewer_rating) >= 1
                  ? styes.active_start
                  : styes.disable_start
              }
            >
              &#9733;
            </li>
            <li
              className={
                Number(reviewer.reviewer_rating) >= 2
                  ? styes.active_start
                  : styes.disable_start
              }
            >
              &#9733;
            </li>
            <li
              className={
                Number(reviewer.reviewer_rating) >= 3
                  ? styes.active_start
                  : styes.disable_start
              }
            >
              &#9733;
            </li>
            <li
              className={
                Number(reviewer.reviewer_rating) >= 4
                  ? styes.active_start
                  : styes.disable_start
              }
            >
              &#9733;
            </li>
            <li
              className={
                Number(reviewer.reviewer_rating) >= 5
                  ? styes.active_start
                  : styes.disable_start
              }
            >
              &#9733;
            </li>
          </ul>
        </div>
      </div>
      <p className={styes.reviewer_comment}>{reviewer.comment}</p>
    </li>
  );
};
