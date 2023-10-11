import { Link } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left_part}>
          <Link className={styles.left_part} to='/'>
            <div className={styles.logo}>
              <img src='/image/logo_2.png' alt='logo' />
            </div>
            <div>
              <p className={styles.czid}>
                Центр&nbsp;Здоровья и&nbsp;Долголетия
              </p>
              <p className={styles.agu}>
                Адыгейский Государственный Университет
              </p>
            </div>
          </Link>
        </div>
        <div className={styles.right_part}>
          <div className={styles.adress}>
            <div className={styles.img_wrap}>
              <img src='/image/icons/icon-adress.png' alt='adress-sign' />
            </div>
            <div className={styles.adress_point}>
              <p>РА, г. Майкоп,</p>
              <p>ул.&nbsp;Первомайская,&nbsp;208</p>
            </div>
          </div>
          <div className={styles.phone}>
            <div className={styles.img_wrap}>
              <img src='/image/icons/icon-phone.png' alt='phone-sign' />
            </div>
            <div className={styles.phone_point}>
              <p>+7-960-499-22-11</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
