import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Layout;