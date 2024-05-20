import { Advert } from 'components/Advert/Advert';
import React, { useEffect, useState } from 'react';
import { Options } from 'components/Options/Options';
import { Header } from 'components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdvert } from '../../redux/selectors';
import { fetchAdvert } from '../../redux/operations';
import { clearAdverts } from '../../redux/slices';

const Catalog = () => {
  const adverts = useSelector(selectAdvert);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(clearAdverts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAdvert(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Header />
      <div className="content_container">
        <Options />
        <Advert adverts={adverts} handleLoadMore={handleLoadMore} />
      </div>
    </>
  );
};

export default Catalog;
