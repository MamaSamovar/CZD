import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Navigation from '../../components/Navigation/navigation';
import Content from '../Content/content';
import styles from './pageLayout.module.css';

function PageLayout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Header />
        <Navigation />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default PageLayout;
