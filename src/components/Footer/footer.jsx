import { Link } from 'react-router-dom';
import styles from './footer.module.css';

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left_part}>
          <div className={styles.logo}>
            <img src='/image/logo_2.png' alt='logo' />
          </div>
          <div>
            <p className={styles.czid}>Центр Здоровья и Долголетия</p>
            <p className={styles.agu}>Адыгейский Государственный Университет</p>
          </div>
        </div>
        <div className={styles.right_part}>
          <ul className={styles.menu}>
            <li>
              <Link className={styles.menu_point} to='/'>
                Главная
              </Link>
            </li>
            <li>
              <Link className={styles.menu_point} to='/about'>
                О нас
              </Link>
            </li>
            <li>
              <Link className={styles.menu_point} to='/courses'>
                Направления
              </Link>
            </li>
            <li>
              <Link className={styles.menu_point} to='/timetable'>
                Расписание
              </Link>
            </li>
            <li>
              <Link className={styles.menu_point} to='/online-school'>
                Онлайн-школа
              </Link>
            </li>
            <li>
              <Link className={styles.menu_point} to='/prices'>
                Цены
              </Link>
            </li>
            <li>
              <Link className={styles.menu_point} to='/materials'>
                Библиотека
              </Link>
            </li>
            <li>
              <Link className={styles.menu_point} to='/contacts'>
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyrights_points}>
        {/* <div className={styles.adress}>
          <p>РА, г. Майкоп, ул. Первомайская, 208</p>
        </div>
        <div className={styles.phone}>
          <p>+7-960-499-22-11</p>
        </div> */}
        <div className={styles.copyright}>
          <p>ⓒ 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
