import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';
import { HelmetProvider } from 'react-helmet-async';

const Layout = ({ children }) => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default Layout;