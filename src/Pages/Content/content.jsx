import { Outlet } from 'react-router-dom';
import styles from './content.module.css';

function Content() {
  return (
    <div className={styles.wrapper}>
      <p>
        <b>Сменяющийся контент</b>
      </p>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}

export default Content;
