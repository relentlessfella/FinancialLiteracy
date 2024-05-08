import Header from '@/components/Header/Header';
import ContactUs from '@/components/ContactUs/ContactUs';

function Layout({ children }) {
  return (
    <>
      <Header />
      <div style={{ minHeight: '70vh' }}>{children}</div>
      <ContactUs />
    </>
  );
}

export default Layout;
