import Banner from './Banner/banner';
import MainInfo from './MainInfo/mainInfo';
import styles from './mainPage.module.css';

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <p>
        <b>MainPage</b>
      </p>
      <Banner />
      <MainInfo />
    </div>
  );
}

export default MainPage;
