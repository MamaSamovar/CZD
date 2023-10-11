import { Link } from 'react-router-dom';
import styles from './navigation.module.css';

function Navigation() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles.menu}>
          {/* <li className={styles.link}>
            <Link className={styles.menu_point} to='/'>Главная</Link>
          </li> */}
          <li className={styles.link}>
            <Link className={styles.menu_point} to='/about'>
              О нас
            </Link>
          </li>
          <li className={styles.link}>
            <Link className={styles.menu_point} to='/courses'>
              Направления
            </Link>
          </li>
          <li className={styles.link}>
            <Link className={styles.menu_point} to='/timetable'>
              Расписание
            </Link>
          </li>
          <li className={styles.link}>
            <Link className={styles.menu_point} to='/prices'>
              Цены
            </Link>
          </li>
          <li className={styles.link}>
            <Link className={styles.menu_point} to='/online-school'>
              Онлайн-школа
            </Link>
          </li>
          <li className={styles.link}>
            <Link className={styles.menu_point} to='/materials'>
              Библиотека
            </Link>
          </li>
          <li className={styles.link}>
            <Link className={styles.menu_point} to='/contacts'>
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
