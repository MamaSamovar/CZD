import { Outlet } from 'react-router-dom';
import styles from './courses.module.css';

function Courses() {
  return (
    <div className={styles.wrapper}>
      <p>Courses</p>
      <Outlet />
    </div>
  );
}

export default Courses;
