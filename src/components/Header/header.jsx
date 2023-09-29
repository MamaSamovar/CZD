import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}></div>
        <div className={styles.adress}></div>
      </div>
      <p>
        <b>Header</b>
      </p>
    </div>
  );
}

export default Header;
