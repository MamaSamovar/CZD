import { Link } from 'react-router-dom';
import styles from './navigation.module.css';

function Navigation() {
  return (
    <div className={styles.wrapper}>
      <p>
        <b>Navigation</b>
      </p>
      <ul>
        <li>
          <Link to='/'>Главная</Link>
        </li>
        <li>
          <Link to='/about'>О нас</Link>
        </li>
        <li>
          <Link to='/courses'>Направения</Link>
        </li>
        <li>
          <Link to='/timetable'>Расписание</Link>
        </li>
        <li>
          <Link to='/online-school'>Онлайн-школа</Link>
        </li>
        <li>
          <Link to='/prices'>Цены</Link>
        </li>
        <li>
          <Link to='/materials'>Библиотека</Link>
        </li>
        <li>
          <Link to='/contacts'>Контакты</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
