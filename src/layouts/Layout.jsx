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
          
          {/* Eleven Labs Conversational AI Widget */}
          <elevenlabs-convai 
            agent-id="agent_5801k1skmryhfdm8arfd3pg09ce8"
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              zIndex: 1000
            }}
            className="elevenlabs-widget"
          ></elevenlabs-convai>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default Layout;