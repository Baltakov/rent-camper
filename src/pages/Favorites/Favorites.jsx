import { ListAdvert } from 'components/Advert/ListAdvert';
import { Header } from 'components/Header/Header';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import styles from '../Home/Home.module.css';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <Header />
      <div className="content_container">
        {favorites.length === 0 ? (
          <p className={styles.favorit_empty}>Not yet favorites</p>
        ) : (
          <ListAdvert adverts={favorites} />
        )}
      </div>
    </>
  );
};

export default Favorites;
