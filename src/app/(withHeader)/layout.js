import Header from './Header/Header';
import styles from './page.module.css';

function Layout({ children }) {
  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>
      <div style={{ minHeight: '70vh' }}>{children}</div>
    </>
  );
}

export default Layout;
