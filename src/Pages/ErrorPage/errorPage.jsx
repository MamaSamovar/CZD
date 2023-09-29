import styles from './errorPage.module.css';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page' className={styles.wrapper}>
      <p>
        <b>ErrorPage</b>
      </p>
    </div>
  );
}

export default ErrorPage;
