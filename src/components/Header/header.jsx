import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left_part}>
          <div className={styles.logo}>
            <img src='/image/logo_2.png' alt='logo' />
          </div>
          <div>
            <p>Центр Здоровья и Долголетия</p>
            <p>АГУ</p>
          </div>
        </div>
        <div className={styles.right_part}>
          <div className={styles.adress}>
            <p>РА, г. Майкоп, ул. Первомайская, 208</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
